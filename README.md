# Pasarawa Web

Pasarawa Web is a front-end application that interfaces with the Pasarawa smart contract on the Ethereum blockchain. It provides a user-friendly interface for users to view, interact with, and manage product information stored on the blockchain. The project is built using React, Vite, Tailwind CSS, and the Mantine component library.

## Project Information

This project is part of the final exam for the **Advanced Blockchain Programming** course at BINUS University. Below are the details:

- **Student ID (NIM):** 2602063144
- **Name:** Adzin Zhalifunnas
- **Course:** DTSC6017001 – Advanced Blockchain Programming
- **Lecturer:** D3579 – Dr. Ir. Alexander Agung Santoso Gunawan, S.Si., M.T., M.Sc.
- **University:** BINUS University
- **Type:** Final Exam (Individual)

## Features

- **Product Listing:** Displays products retrieved from the blockchain, including name, description, price, and status.
- **Blockchain Interaction:** Seamless integration with the Ethereum blockchain using Web3.
- **Responsive Design:** Optimized for various screen sizes using Tailwind CSS.
- **Modern UI/UX:** Enhanced user experience with Mantine components.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- MetaMask or another Ethereum-compatible wallet

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adzinzhalifunnas/pasarawa-web.git
   cd pasarawa-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open the application in your browser:
   ```
   http://localhost:5173
   ```

### Building for Production

To create an optimized build for production:
```bash
npm run build
```
The build output will be available in the `dist/` directory.

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

## Key Technologies

- **React:** For building the user interface.
- **Vite:** A fast development build tool.
- **Tailwind CSS:** For rapid styling and responsive design.
- **Mantine:** A React component library for enhanced UI/UX.
- **Web3.js:** For interacting with the Ethereum blockchain.

## Example Workflow

1. **Retrieve Product Data:**
   The application connects to the Ethereum blockchain via Web3.js and fetches product data from the smart contract.

2. **Display Products:**
   Products are displayed in a responsive grid using Mantine and Tailwind CSS.

3. **Interact with Products:**
   Users can view product details, purchase products, or perform other actions depending on the smart contract's functionality.

## Troubleshooting

- **MetaMask Errors:** Ensure your wallet is connected to the correct network (e.g., Sepolia).

## License

This project is licensed under the [MIT License](LICENSE).
