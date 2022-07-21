import { ChainId } from 'quest-sikuswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
    [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
    [ChainId.ROPSTEN]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
    [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
    [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
    [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
    [ChainId.FANTOM]: '0x63B8310c5093ac917552931D8b15d5AB6945c0a6',
    [ChainId.FANTOM_TESTNET]: '',
    [ChainId.MATIC]: '0x95028E5B8a734bb7E2071F96De89BABe75be9C8E',
    [ChainId.MATIC_TESTNET]: '0x9Fc8e50Eb08C1F463b45d1AFb9c261B0a1903006',
    [ChainId.XDAI]: '0xb5b692a88BDFc81ca69dcB1d924f59f0413A602a',
    [ChainId.BSC]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
    [ChainId.BSC_TESTNET]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
    [ChainId.ARBITRUM]: '0xBEee73F7f7d4848E1700135ff795960F2Aba66DB',
    [ChainId.MOONBASE]: '0x9B7D5fa91b4747031d8E7807DaEC906F0f683E78',
    [ChainId.AVALANCHE]: '0x0FB54156B496b5a040b51A71817aED9e2927912E',
    [ChainId.FUJI]: '0x0053957E18A0994D3526Cf879A4cA7Be88e8936A',
    [ChainId.HECO]: '0xc9a9F768ebD123A00B52e7A0E590df2e9E998707',
    [ChainId.HECO_TESTNET]: '0x935Bfe9AfaA2Be26049ea4EDE40A3A2243361F87',
    [ChainId.HARMONY]: '0xFE4980f62D708c2A84D3929859Ea226340759320',
    [ChainId.HARMONY_TESTNET]: '0xbcd3451992B923531615293Cb2b2c38ba8DE9529',
    [ChainId.OKEX]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    [ChainId.OKEX_TESTNET]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }