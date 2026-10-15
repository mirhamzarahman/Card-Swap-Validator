# 🔄 Card Swap Validator

A lightweight validation system that checks whether a current arrangement can be transformed into a desired state using a single swap operation.

---

## 📌 Project Overview

**Card Swap Validator** is a small algorithm-driven validation engine designed to determine whether a three-item sequence can reach a predefined target arrangement with minimal changes.

The project represents a real-world scenario where systems need to quickly verify whether a configuration can be corrected through a simple state transition.

Instead of modifying data blindly, the validator analyzes the current state, identifies differences, and decides whether a single adjustment is enough.

---

## 🌍 Real-World Conceptual Scenario

Imagine a dashboard, workflow system, or UI component where three priority cards must appear in a specific order:

```
High → Medium → Low
```

A user accidentally changes the order.

The system needs to answer:

> "Can this arrangement be fixed with only one swap?"

This project acts as a lightweight state verification service.

---

## 🧠 Core Concept

The project focuses on:

- Array/string comparison
- Mismatch detection
- State validation
- Minimal transformation logic
- Efficient decision making

The main idea is identifying how many positions differ from the expected configuration.

---

## ⚙️ How the System Works

The validator compares:

```
Current State
      |
      ↓
Expected State
      |
      ↓
Count Differences
      |
      ↓
Can One Swap Fix It?
      |
      ↓
Return Result
```

A single swap can:

- Fix an already correct state
- Correct exactly two misplaced positions

---

## 🧮 Algorithm / Data Structure Used

### Algorithm

**Mismatch Counting Algorithm**

### Data Structures

- String Array
- Counter Variable

The system does not require complex data structures because the input size is small and fixed.

---

## 🔍 Step-by-Step Logic

1. Define the expected arrangement.

Example:

```
abc
```

2. Compare each position of the current arrangement.

Example:

```
acb

Position 1:
a == a ✅

Position 2:
c != b ❌

Position 3:
b != c ❌
```

3. Count mismatched positions.

4. Apply validation rules:

| Mismatched Positions | Result |
|---|---|
| 0 | Valid |
| 2 | Valid after one swap |
| Other values | Invalid |

---

## ✨ Key Features

- ✅ Fast state validation
- ✅ Minimal operation checking
- ✅ Clean and readable implementation
- ✅ No unnecessary processing
- ✅ Demonstrates practical algorithm design

---

## 💡 Example Use Case

### Input

```text
Current State:
acb

Expected State:
abc
```

### Processing

```
Swap c and b
```

### Output

```text
VALID
```

---

## 🖥️ Example Usage

```javascript
const result = validateArrangement("acb");

console.log(result);
```

Output:

```text
true
```

---

## ⏱️ Complexity Analysis

| Metric | Complexity |
|---|---|
| Time Complexity | O(n) |
| Space Complexity | O(1) |

The algorithm only scans the arrangement once and stores a single counter.

---

## 🛠️ Technologies Used

- JavaScript (ES6+)
- Algorithmic Problem Solving
- String Processing
- Validation Logic

---

## 📁 Project Structure

```
Card-Swap-Validator/
│
├── src/
│   └── validator.js
│
├── README.md
│
└── package.json
```

---

## 🚀 How to Run the Project

### Clone Repository

```bash
git clone https://github.com/mirhamzarahman/Card-Swap-Validator.git
```

### Navigate to Project

```bash
cd Card-Swap-Validator
```

### Run

```bash
node src/validator.js
```

---

## 📚 Learning Outcomes

Through this project, I practiced:

- Designing simple validation systems
- Applying mismatch detection techniques
- Understanding minimal transformation algorithms
- Writing clean reusable JavaScript logic
- Converting algorithm concepts into practical software ideas

---

## 🔮 Possible Future Improvements

- Support larger datasets
- Add customizable target configurations
- Create a web-based validation interface
- Add API support for external applications
- Include automated test cases

---

## 📄 License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project with proper attribution.
