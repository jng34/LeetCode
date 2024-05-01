# Write your MySQL query statement below

# Triangle inequality theorem
# the sum of two sides must be greater than then third side

SELECT x, y, z,
IF (x + y > z AND y + z > x AND x + z > y, "Yes", "No")
AS triangle
FROM Triangle
