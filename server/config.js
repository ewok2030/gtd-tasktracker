const config = {
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/gtd-tasktracker',
    port: process.env.PORT || 3000,
    seedDatabase: true
};

export default config;
