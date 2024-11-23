import fs from "fs";
import path from "path";
import chalk from "chalk";
import { promisify } from "util";
import { writeFile, readFile } from "fs";
import { exec } from "child_process";
import { promisified } from "regedit";
import { fileURLToPath } from "url";

const promisifiedRegedit = promisified;
const writeFileAsync = promisify(writeFile);
const readFileAsync = promisify(readFile);
const execPromise = promisify(exec);

const getOrdinalSuffix = (number) => {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return number + "st";
  }
  if (lastDigit === 2 && lastTwoDigits !== 12) {
    return number + "nd";
  }
  if (lastDigit === 3 && lastTwoDigits !== 13) {
    return number + "rd";
  }
  return number + "th";
};

const formatDate = (timestamp) => {
  const date = new Date(Math.floor(timestamp * 1000));
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  const shortYear = year.toString().slice(-2);
  return `${day}/${month}/${shortYear}`;
};

const convertTimestamp = (seconds) => {
  if (seconds < 1) {
    seconds = 0;
  }
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = secs.toString().padStart(2, "0");
  return `${chalk.magentaBright("[")}${chalk.whiteBright(
    formattedHours
  )}${chalk.blackBright(":")}${chalk.whiteBright(
    formattedMinutes
  )}${chalk.blackBright(":")}${chalk.whiteBright(
    formattedSeconds
  )}${chalk.magentaBright("]")}`;
};

const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${chalk.magentaBright("[")}${chalk.whiteBright(
    hours
  )}${chalk.blackBright(":")}${chalk.whiteBright(minutes)}${chalk.blackBright(
    ":"
  )}${chalk.whiteBright(seconds)}${chalk.magentaBright("]")}`;
};

const formatNumber = (number) => {
  const suffixes = ["", "K", "M", "B", "T", "Q"];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (number < 1000) {
    return number.toString();
  }
  let tier = -1;
  let value = number;
  while (value >= 1000) {
    value /= 1000;
    tier++;
  }
  if (tier >= suffixes.length) {
    const alphabetIndex = tier - suffixes.length;
    const majorLetter = alphabet[Math.floor(alphabetIndex / alphabet.length)];
    const minorLetter = alphabet[alphabetIndex % alphabet.length];
    return `${value.toFixed(3)}${majorLetter}${minorLetter}`;
  }
  return `${value.toFixed(3)}${suffixes[tier]}`;
};

// Mendapatkan direktori dari URL file saat ini
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fungsi untuk mendapatkan direktori session, sekarang mengarah ke desktop
const getSessionDirectory = (directoryName) => {
  // Menggunakan __dirname untuk mendapatkan direktori tempat script berada
  const baseDir = path.resolve(__dirname, "../.."); // naik dua level ke folder 'catizen-bot (SFILE.MOBI)'
  const sessionDir = path.join(baseDir, directoryName);
  return sessionDir;
};

const createSessionDirectory = (folderName) => {
  const directory = getSessionDirectory(folderName);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, {
      recursive: true,
    });
  }
};

const updateBanner = (content) => {
  const oldBanner = "CATIZEN";

  const newBanner = "CATIZEN";

  return content.replace(oldBanner, newBanner);
};

const writeToFile = async (filePath, data) => {
  await writeFileAsync(filePath, data, "utf-8");
};

const readJsonFile = (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContent);
  } catch (error) {
    return null;
  }
};

const deleteFile = (filePath) => {
  try {
    fs.unlinkSync(filePath);
    return {
      status: true,
      message: "File deleted successfully",
    };
  } catch (error) {
    return {
      status: false,
      message: "Error deleting the file",
    };
  }
};

const getAllFilesFromFolder = (folderName) => {
  let files = [];
  function readFiles(directory) {
    const items = fs.readdirSync(directory);
    items.forEach((item) => {
      const itemPath = path.join(directory, item);
      const itemStats = fs.statSync(itemPath);
      if (itemStats && itemStats.isDirectory()) {
        readFiles(itemPath);
      } else {
        files.push(itemPath);
      }
    });
  }
  readFiles(getSessionDirectory(folderName));
  return files;
};

const groupAccounts = (accounts, groupSize) => {
  const groupedAccounts = [];
  for (let i = 0; i < accounts.length; i += groupSize) {
    groupedAccounts.push(accounts.slice(i, i + groupSize));
  }
  return groupedAccounts;
};

const getUserFromUrl = (url) => {
  const urlParams = new URLSearchParams(url);
  const userParam = urlParams.get("user");
  if (!userParam) {
    throw new Error("Parameter 'user' tidak ditemukan di URL");
  }
  const decodedUser = decodeURIComponent(userParam);
  return JSON.parse(decodedUser);
};

export {
  getOrdinalSuffix,
  convertTimestamp,
  getCurrentTime,
  formatNumber,
  createSessionDirectory,
  getSessionDirectory,
  getAllFilesFromFolder,
  writeToFile,
  readJsonFile,
  deleteFile,
  updateBanner,
  groupAccounts,
  getUserFromUrl,
  formatDate,
};
