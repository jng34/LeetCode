# Write your MySQL query statement below
SELECT name
FROM Salesperson
WHERE name NOT IN (
  SELECT Salesperson.name
  FROM Salesperson
  LEFT JOIN Orders ON Salesperson.sales_id = Orders.sales_id
  LEFT JOIN Company ON Orders.com_id = Company.com_id
  WHERE Company.name = "RED"
)
