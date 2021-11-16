const categories = [
    {
        "Id": 1,
        "BudgetId": 1,
        "Title": "Groceries",
        "Amount": 100,
        "Transactions": [
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
    },
    {
        "Id": 2,
        "BudgetId": 1,
        "Title": "Des Essentials",
        "Amount": 900
    }
]

exports.getAllCategories = function(req, res) {
    res.json(categories);
}

exports.getCategoryById = function(req, res) {
    let category = categories.find(category => category.Id === req.params.id);

    if (category) {
        res.json(category);
    } else {
        res.sendStatus(404);
    }    
}