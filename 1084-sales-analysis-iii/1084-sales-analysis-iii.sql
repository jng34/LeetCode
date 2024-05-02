# Write your MySQL query statement below
SELECT p.product_id, p.product_name
FROM Sales s
JOIN Product p
ON p.product_id = s.product_id
GROUP BY p.product_id
HAVING (
  MIN(sale_date) >= "2019-01-01"   
  AND MAX(sale_date) <= "2019-03-31" 
)
