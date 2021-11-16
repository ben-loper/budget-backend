const transactions = [
    {
        "Id": 1,        
        "TransactionDate": "11/11/2021",
        "Title": "Our Budget",
        "Amount": 20
    },
    {
        "Id": 1,        
        "TransactionDate": "11/12/2021",
        "Title": "Our Budget",
        "Amount": 20
    }
]

exports.getAllTransactions = function(req, res) {
    res.json(transactions);
}

exports.getTransactionById = function(req, res) {
    let transaction = transactions.find(transaction => transaction.Id === req.params.id);

    if (transaction) {
        res.json(transaction);
    } else {
        res.sendStatus(404);
    }    
}