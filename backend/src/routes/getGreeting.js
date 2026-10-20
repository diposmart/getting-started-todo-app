const GREETING = 'Hello world for DBS!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
