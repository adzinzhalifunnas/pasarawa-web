import Web3 from 'web3';
import PasarawaABI from './PasarawaABI.json';

const contractAddress = '0x09ffc7938007abdd782fe11e76caab0584fe636f';

/**
 * @function PasarawaContract
 * @description Initializes and returns a Web3 contract instance for interacting with the Pasarawa smart contract.
 * 
 * @returns {Promise<Object>} - A promise that resolves to the Pasarawa contract instance if successfully initialized.
 * 
 * @throws {Error} - Throws an error if no Web3 provider is detected or if initialization fails.
 * 
 * @example
 * // Usage example:
 * PasarawaContract()
 *     .then(contract => {
 *         console.log('Contract initialized:', contract);
 *     })
 *     .catch(error => {
 *         console.error('Failed to initialize contract:', error);
 *     });
 * 
 * @remarks
 * - This function checks if a Web3 provider (e.g., MetaMask) is available in the browser.
 * - If a provider is detected, it requests the user's Ethereum account access.
 * - Once the user grants permission, it creates a contract instance using the provided ABI and contract address.
 * - If no Web3 provider is detected, it prompts the user to install MetaMask or another compatible provider.
 * 
 * @dependencies
 * - Web3.js: A JavaScript library for interacting with Ethereum nodes.
 * - PasarawaABI: The ABI (Application Binary Interface) of the Pasarawa smart contract.
 */
export const PasarawaContract = async () => {
    try {
        // Check if a Web3 provider is available in the browser
        if (typeof window !== 'undefined' && typeof (window).ethereum !== 'undefined') {
            // Initialize Web3 instance using the provider
            const web3 = new Web3((window).ethereum);

            // Request user's Ethereum account access via the provider (e.g., MetaMask)
            await (window).ethereum.request({ method: 'eth_requestAccounts' });

            // Create a contract instance with the provided ABI and address
            const contract = new web3.eth.Contract(PasarawaABI, contractAddress);

            // Log successful initialization
            console.log('Pasarawa contract initialized successfully:', contract);

            // Return the contract instance
            return contract;
        } else {
            // Throw error if no Web3 provider is detected
            throw new Error('No Web3 provider detected. Please install MetaMask or another provider.');
        }
    } catch (error) {
        // Log and rethrow any errors encountered during initialization
        console.error('Error initializing Pasarawa contract:', error);
        throw error;
    }
}