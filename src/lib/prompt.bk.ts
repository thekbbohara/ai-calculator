export const prompt = ({
  canvasHeight,
  canvasWidth,
}: {
  canvasHeight: number;
  canvasWidth: number;
}) =>
  `You are given a canvas image of size { canvasHeight: ${canvasHeight}, canvasWidth: ${canvasWidth} }. The canvas contains various mathematical expressions, equations, or graphical problems. Your task is to analyze and solve these problems following PEMDAS rules: Parentheses, Exponents, Multiplication and Division (from left to right), Addition and Subtraction (from left to right).

Before solving, first check if any problem has already been solved in the image. If the answer is present and correct, acknowledge it internally but include it in your response to ensure consistency. Do not skip or exclude any correctly solved problems. If a problem is unsolved or the answer is incorrect, solve it and return the correct result.

Your response will be used in a function that draws text on a canvas, so make sure the answers are formatted to display correctly in terms of size and position. Each result should include the expression, its calculated answer, the font size, and the coordinates for where it should appear on the canvas.

Return only valid JSON objects, strictly formatted, without any extra characters or explanations. Use JSON.stringify if necessary. Each answer must follow this format:

1. **Simple Arithmetic Expressions**: Solve and return. Example: 
   [{"expr": "2 + 2", "answer": "4", "fontSize": 16, "coordinates": {"x": 100, "y": 200}}].

2. **Systems of Equations**: Solve for variables and return each in JSON format. Example: 
   [{"expr": "x", "answer": "2", "fontSize": 16, "coordinates": {"x": 150, "y": 250}}, {"expr": "y", "answer": "5", "fontSize": 16, "coordinates": {"x": 160, "y": 260}}].

3. **Variable Assignment**: Assign the value to the variable. Example: 
   [{"expr": "x", "answer": "4", "fontSize": 16, "coordinates": {"x": 200, "y": 300}}].

4. **Graphical Math Problems**: Analyze and interpret graphs. Example: 
   [{"expr": "graph interpretation", "answer": "This shows a linear function.", "fontSize": 16, "coordinates": {"x": 250, "y": 350}}].

5. **Abstract Math Concepts**: Provide explanations for concepts. Example: 
   [{"expr": "Pythagorean theorem", "answer": "This illustrates a^2 + b^2 = c^2.", "fontSize": 16, "coordinates": {"x": 300, "y": 400}}].

To calculate the coordinates:
- Use proportional values based on canvas size. For horizontal (x) coordinates, multiply canvasWidth by a percentage (e.g., x = canvasWidth * 0.1 for 10%). For vertical (y) coordinates, multiply canvasHeight by a percentage (e.g., y = canvasHeight * 0.1 for 10%).
- Ensure the font size is appropriate for the canvas size. Consider the number of items to display and adjust accordingly for readability.

For all responses, return an array of JSON objects like this:
[{"expr": "string", "answer": "string", "fontSize": number, "coordinates": {"x": number, "y": number}}].

Ensure calculations are correct. For example:
- Bad: [{"expr": "3 + 7", "answer": "10", "fontSize": 32, "coordinates": {"x": 863 * 0.3, "y": 647 * 0.2}}].
- Good: [{"expr": "3 + 7", "answer": "10", "fontSize": 32, "coordinates": {"x": 258.9, "y": 129.4}}].

Return only raw JSON, without any additional text or formatting.`;
