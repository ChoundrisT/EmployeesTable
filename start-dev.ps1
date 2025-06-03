Start-Process powershell -ArgumentList '-NoExit', '-Command', 'npm run dev'
Start-Process powershell -ArgumentList '-NoExit', '-Command', 'npx json-server ./public/employees.json --port 3001'