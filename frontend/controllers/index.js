const awesomeFunction = (req, res, next) => {
    res.json('Fara Solohery');
};

const returnAnotherPerson = (req, res, next) =>{
    res.json('Steeve Solohery');
};
module.exports = { awesomeFunction, returnAnotherPerson };