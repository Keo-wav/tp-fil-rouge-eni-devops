require('dotenv').config();
const app = require('./app');
const db = require('./models');

const PORT = process.env.PORT || 3000;

// On lance le serveur immédiatement
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  
  // On tente la synchro DB en arrière-plan
  db.sequelize.sync()
    .then(() => console.log("✅ DB Synchronized"))
    .catch(err => console.error("❌ DB Sync failed:", err.message));
});
