# Write your MySQL query statement below
SELECT contest_id, 
ROUND(COUNT(DISTINCT Users.user_id) / (
    SELECT COUNT(Users.user_id) FROM Users   
) * 100, 2) AS percentage
FROM Users
JOIN Register
ON Users.user_id = Register.user_id
GROUP BY contest_id
ORDER BY percentage DESC, contest_id ASC