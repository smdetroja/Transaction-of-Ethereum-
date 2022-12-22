import React from 'react'

const Blockchain = () => {
    const data = [
        {
            id: 1,
            question: 'What is a blockchain?',
            answer: 'A blockchain is a distributed, cryptographically-secure database structure that allows network participants to establish a trusted and immutable record of transactional data without the need for intermediaries. A blockchain can execute a variety of functions beyond transaction settlement, such as smart contracts. Smart contracts are digital agreements that are embedded in code and that can have limitless formats and conditions. Blockchains have proven themselves as superior solutions for securely coordinating data, but they are capable of much more, including tokenization, incentive design, attack-resistance, and reducing counterparty risk. The very first blockchain was the Bitcoin blockchain, which itself was a culmination of over a century of advancements in cryptography and database technology.',
        },
        {
            id: 2,
            question: 'How does a blockchain work?',
            answer: 'When a digital transaction occurs in a blockchain network, it is grouped together in a cryptographically-secure “block” with other transactions that have occurred in the same time frame. The block is then broadcast to the network. A blockchain network is comprised of nodes or participants who validate and relay transaction information. The block of transactions is verified by participants called miners, who use computing power to solve a cryptographic puzzle and validate the block of transactions. The first miner to solve and validate the block is rewarded. Each verified block is connected to the previously verified block, creating a chain of blocks. One important cryptographic underpinning of blockchains is the hash function. Hashing assigns a fixed value to a string that is inputted into the system. Blockchain hashing power results in a deterministic, quickly-computable, and preimage-resistant system. Explore our knowledge base to learn more about how a blockchain works.',
        },
        {
            id: 3,
            question: 'What is a blockchain application?',
            answer: 'Blockchain applications are comparable to conventional software applications, except they implement a decentralized architecture and cryptoeconomic systems to increase security, foster trust, tokenize assets, and design new network incentives. There are over 90 Ethereum apps that are currently being used across the Ethereum blockchain ecosystem, from prediction markets to smart legal agreements.',
        },
        {
            id: 4,
            question: 'What are the benefits of blockchain technology?',
            answer: 'Blockchain technology has a wide variety of benefits, for both global enterprises and local communities. The most commonly cited benefits of a blockchain are trusted data coordination, attack-resistance, shared IT infrastructure, tokenization, and built-in incentivization.',
        },
        {
            id: 5,
            question: 'What is a block in a blockchain?',
            answer: 'The “block” in a blockchain refers to a block of transactions that has been broadcast to the network. The “chain” refers to a string of these blocks. When a new block of transactions is validated by the network, it is attached to the end of an existing chain. This chain of blocks is an ever-growing ledger of transactions that the network has validated. We call this single, agreed-upon history of transactions a blockchain. Only one block can exist at a given chain height. There are several ways to add new blocks to an existing chain. These are often termed “proofs,” i.e. Proof of Work (PoW), Proof of Stake (PoS), and Proof of Authority (PoA). All involve cryptographic algorithms with varying degrees of complexity',
        },
        {
            id: 6,
            question: 'What is a blockchain wallet?',
            answer: 'A blockchain wallet contains the public key for others to transfer cryptocurrency to your address and the private key so you can securely access your own digital assets. A blockchain wallet usually accompanies node hosting and stores cryptocurrencies on your computer. The safest place for storing digital assets is offline, what is often called “cold storage.” Read “7 Pro Tips for Keeping Your Crypto Safe” for some best practices on protecting your digital assets.',
        },
        {
            id: 7,
            question: 'What is Ethereum?',
            answer: 'In 2015, the Ethereum blockchain launched as a much more versatile version of the Bitcoin payment system’s underlying blockchain technology. Ethereum is a decentralized, open source, and distributed computing platform that enables the creation of smart contracts and decentralized applications, also known as dapps. Smart contracts are computer protocols that facilitate, verify, or enforce the negotiation and performance of some sort of agreement. Ethereum brought the first practical solution for smart contracts to the blockchain space.',
        },
        {
            id: 8,
            question: 'How does Ethereum work?',
            answer: 'Ethereum utilizes nodes that are operated voluntarily in order to verify transactions in the network. Nodes can contain the entirety or a segment of Ethereum transaction history, the most recent information about the state of smart contracts, the balances of accounts, and more. At the foundation of Ethereum is the Ethereum Virtual Machine (EVM), which is the executable and trustless environment for smart contracts: computer protocols that facilitate, verify, and enforce the negotiation and performance of some sort of digital agreement. The EVM executes a contract with whatever rules the developer initially programmed, such as sending money from Alice to Bob. The EVM executes these programs through a bytecode language. Ethereum developers are able to use Ethereum programming languages such as Solidity and others to write smart contracts and build decentralized applications.',
        },
        {
            id: 9,
            question: 'What is an Ethereum smart contract?',
            answer: 'Ethereum pioneered practical smart contracts for the blockchain ecosystem. A smart contract is essentially a program coded for a specific purpose. Ethereum-based smart contracts have numerous applications. In banking and finance, smart contracts can help automate claims processing and enable real-time enforcement of regulatory control limits. In supply chain management, smart contracts are used to enforce asset tracking processes, as well as automate compliance and reporting. Smart contracts have limitless formats in order to support a wide range of industries.',
        },
        {
            id: 10,
            question: 'What is ether (ETH)?',
            answer: 'Ether is Ethereum’s native token and the fuel that powers the Ethereum blockchain. On Ethereum, each operation (many of which can be combined to create a single unique smart contract or transaction) requires a certain amount of computing energy to perform. Because miners must use energy to complete these operations, a unit of measurement was created to monitor and compensate miners for the work they spend running transactions and smart contracts. This unit of measurement is called gas. Gas is a unit of measurement that is unique to the Ethereum blockchain and that measures the computational work required to run transactions or smart contracts within the EVM. The more energy required to run an operation (i.e. a more complex piece of code), the more gas is required. The value of each unit of gas is expressed in ether. Ether therefore provides an incentive for miners to validate blocks of transactions and for developers to write concise, quality code. ETH is the symbol for ether. Note that “eth” is also a command line used for importing the Ethereum wallet.',
        },
        {
            id: 11,
            question: 'What is an ETH address?',
            answer: 'All cryptocurrencies require addresses, or public identifiers, to send and receive funds. An ETH address is specific to Ethereum’s ether currency. Miners also need to set up an “etherbase,” which is a set address that will collect earnings from mining. “How to Store Digital Assets on Ethereum” is a helpful walkthrough for understanding cryptocurrency wallets, seed phrases, and security best practices for managing digital assets.',
        },
        {
            id: 12,
            question: 'What is the gas limit in Ethereum?',
            answer: 'The Ethereum gas limit is one of three core concepts of ether. The others are cost and price. Limits are set as the maximum payment one is willing to incur to complete a transaction. If a gas limit is set too low, it is possible that the transaction will fail. This is because the miner who attempts the transaction will go on and execute operations until the gas limit is reached. If additional operations are required, then the miner keeps the gas as fees for work done and the system records the transaction as “failed.” Gas limits are important because they protect both users and miners from faulty codes and network attacks. They are relevant because the dynamic nature of the Ethereum blockchain is comprised of a variety of smart contract operational levels. Not all transactions are the same and therefore require different amounts of gas to fuel their operations.',
        },
    ]
    return (
        <div className='flex flex-col w-full justify-start items-center'>
            <h1 className='text-3xl sm:text-5xl text-white py-1'>
                Learn Blockchain
            </h1>
            <div className='flex mf:flex-col flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col mf:mr-10'></div>
                {data.map((faq) => (
                    <div key={faq.id} className='flex flex-row justifystart items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
                        <div className='ml-5 flex flex-col flex-1'>
                            <h1 className='mt-2 text-white text-5xl' >{faq.question}</h1>
                            <hr className='m-2 border-cyan-600' />
                            <p className='mt-2 text-white text-md md:w-9/12' >{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blockchain