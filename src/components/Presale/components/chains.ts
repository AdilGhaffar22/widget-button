import { http } from 'viem';
import { base, baseSepolia, Chain, mainnet } from 'viem/chains';

export const supportedChains: readonly [Chain, ...Chain[]] = [
	base,
	mainnet,
	baseSepolia,
];
export const transports = {
	[base.id]: http(),
	[mainnet.id]: http(),
	[baseSepolia.id]: http(),
};
export const defaultChain = base;

// import { http } from 'viem';
// import { base, Chain } from 'viem/chains';

// // interface Chains extends readonly [Chain, ...Chain[]] = readonly [Chain, ...Chain[]]

// export const supportedChains: readonly [Chain, ...Chain[]] = [
//     // baseSepolia,
//     base,
//     // mainnet,
// ];
// export const transports = {
//     [base.id]: http(),
//     // [mainnet.id]: http(
//     //     "https://eth-mainnet.g.alchemy.com/v2/R8Pb0NRNAXnuknuPryzfpltZ1k5-3LYu"
//     // ),
//     // [baseSepolia.id]: http(
//     //     "https://base-sepolia.g.alchemy.com/v2/_YWE7QBtIaJ2I721qC0yfxPo2M9uxIdC"
//     // ),
// };
// export const defaultChain = base;
