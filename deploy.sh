echo '\n ==================================\n 🛠 BUILDING FRONTEND FILES  \n =================================='
npm run build
echo '\n ==================================\n 🛠 COMPLETED BUILDING FRONTEND FILES \n =================================='
echo '\n ==================================\n 📡 DEPLOYING APP TO G-CLOUD \n =================================='
gcloud app deploy
echo '\n ==================================\n 🌎 LAUNCHING APP \n =================================='
open https://summy.dev