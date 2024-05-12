# Write your MySQL query statement below
SELECT * FROM Patients
WHERE REGEXP_LIKE(conditions, "\\bDIAB1")