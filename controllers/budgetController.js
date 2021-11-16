const budgets = [
    {
        "Id": "1",
        "Title": "Our Budget",
        "MonthlyGross": 1000,
        "Categories": [ {
            "Id": 1,            
            "Title": "Groceries",
            "Amount": 100
        },
        {
            "Id": 2,            
            "Title": "Des Essentials",
            "Amount": 900
        }]
    },
    {
        "Id": "2",
        "Title": "New Budget",
        "MonthlyGross": 2000
    }
]

exports.getAllBudgets = function(req, res) {
    res.json(budgets);
}

exports.getBudgetById = function(req, res) {
    let budget = budgets.find(budget => budget.Id === req.params.id);

    if (budget) {
        res.json(budget);
    } else {
        res.sendStatus(404);
    }    
}