import { drizzle } from 'drizzle-orm/postgres-js';
const db = drizzle(process.env.DATABASE_URL || "postgres://zendentadmin:zendentaAdmin123@localhost:5432/zendenta");


const sql = `
-- Create a table
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(50),
    salary NUMERIC(10, 2),
    hire_date DATE DEFAULT CURRENT_DATE
);

-- Insert some sample data
INSERT INTO employees (name, department, salary) 
VALUES 
    ('Alice', 'Engineering', 75000),
    ('Bob', 'Marketing', 60000),
    ('Charlie', 'Sales', 65000),
    ('Dana', 'HR', 55000);

-- Query the table
SELECT * FROM employees;

-- Update a record
UPDATE employees 
SET salary = 80000 
WHERE name = 'Alice';

-- Delete a record
DELETE FROM employees 
WHERE name = 'Dana';

-- Drop the table (when you're done testing)
-- DROP TABLE employees;

`

const data = await db.execute(sql)

console.log(data)

const drizzledata = await db.select().from('employees');

console.log('drizzle data', drizzledata)

const droptable = await db.execute('DROP TABLE employees;')

console.log(droptable)