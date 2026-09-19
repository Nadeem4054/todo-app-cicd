# 📝 Todo App with CI/CD

A modern Todo application with automated CI/CD pipeline using Jenkins & Vercel.

## Features
- ✅ Add/Delete todos
- ✅ Mark todos as complete
- ✅ Real-time statistics
- ✅ Responsive design
- 🚀 Automated CI/CD deployment

## Project Structure
```
my-todo-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TodoList.jsx
│   │   └── TodoList.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── Jenkinsfile
├── vercel.json
├── .gitignore
└── README.md
```

## Local Setup

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/my-todo-app.git
cd my-todo-app

# Install dependencies
npm install

# Start development server
npm start
```

## Build for Production

```bash
npm run build
```

## Deploy with CI/CD

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```

2. **Jenkins automatically builds** (if webhook is configured)

3. **Vercel automatically deploys** (if credentials are set)

## Jenkins Setup

1. Create Jenkins job
2. Configure with GitHub repository
3. Add credentials:
   - ID: `vercel_token`
   - Secret: Your Vercel token
4. Configure webhooks in GitHub

## GitHub Webhook Setup

1. Go to Settings → Webhooks
2. Add webhook:
   - Payload URL: `https://YOUR_NGROK_URL/github-webhook/`
   - Content type: `application/json`
   - Events: Just the push event

## Tech Stack
- **Frontend:** React 18
- **Build Tool:** React Scripts
- **CI/CD:** Jenkins
- **Hosting:** Vercel
- **Version Control:** GitHub

## Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm start` | Start dev server |
| `npm run build` | Build for production |
| `npm test` | Run tests |

## Live Deployment

- Production: https://your-app.vercel.app

## Troubleshooting

### Build fails in Jenkins
- Check: `npm install` runs successfully
- Check: `npm run build` creates `build/` folder
- Check: Vercel token is valid

### Webhook not triggering
- Check: Ngrok is running (`ngrok http 8080`)
- Check: Webhook URL is correct
- Check: GitHub recent deliveries for errors

### Deployment fails
- Check: Vercel token in Jenkins credentials
- Check: Project structure (public/index.html exists)
- Check: No .env secrets are hardcoded

## Next Steps

1. Add database (Firebase/MongoDB)
2. Add user authentication
3. Deploy to other platforms (AWS/GCP)
4. Add more features (categories, due dates, etc.)
5. Add automated testing

## Contributing

1. Create a branch
2. Make changes
3. Commit with clear message
4. Push to GitHub
5. Create Pull Request

## License

MIT License
