const GREETING = 'Hello world for DBS! Paul says Hi';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
