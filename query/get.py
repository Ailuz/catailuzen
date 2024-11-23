import json, urllib.parse, re, os

def main():
    # Membuat folder 'hasil' jika belum ada
    os.makedirs('hasil', exist_ok=True)
    
    with open('query.txt') as q, open('proxy.txt') as p:
        for q_line, p_line in zip(q, p):
            q_line, p_line = q_line.strip(), p_line.strip()
            user_info = urllib.parse.unquote(urllib.parse.parse_qs(q_line).get('user', [''])[0])
            username_match = re.search(r'"username":"(.*?)"', user_info)
            username = username_match.group(1) if username_match else "unknown"
            parts = p_line.split(':')
            json_data = {
                "username": username,
                "access_token": "",
                "init_data": q_line,
                "use_proxy": True,
                "proxy_hostname": parts[0],
                "proxy_protocol": "socks5",
                "proxy_port": int(parts[1]),
                "proxy_username": parts[2],
                "proxy_password": parts[3]
            }
            
            # Simpan file JSON ke folder 'hasil'
            file_path = os.path.join('hasil', f"{username}.json")
            with open(file_path, 'w') as f:
                json.dump(json_data, f, separators=(',', ':'), ensure_ascii=False)
            print(f"Created file: {file_path}")

if __name__ == "__main__":
    main()
