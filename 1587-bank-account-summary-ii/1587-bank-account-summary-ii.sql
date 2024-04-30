# Write your MySQL query statement below
SELECT name, SUM(amount) AS balance
FROM Users
LEFT JOIN Transactions
ON Users.account = Transactions.account
GROUP BY Transactions.account
HAVING balance > 10000