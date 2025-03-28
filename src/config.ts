import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5'
import { arbitrum, mainnet, optimism, polygon } from '@reown/appkit/networks'
import {
  createAppKit,
  useAppKit,
  useAppKitAccount,
  useAppKitEvents,
  useAppKitNetwork,
  useAppKitState,
  useAppKitTheme,
  useDisconnect,
  useWalletInfo
} from '@reown/appkit/react'

// @ts-ignore
import ActionButtonList from './components/ActionButton'
// @ts-ignore
import Footer from './components/Footer'
// @ts-ignore
import InfoList from './components/InfoList'

export const projectId = import.meta.env.VITE_PROJECT_ID || 'b56e18d47c72ab683b10814fe9495694' // this is a public projectId only to use on localhost

const networks = [mainnet, polygon, arbitrum, optimism]

// Setup solana adapter
const ethers5Adapter = new Ethers5Adapter()

// Create modal
const modal = createAppKit({
  adapters: [ethers5Adapter],
  networks,
  metadata: {
    name: 'AppKit React Example',
    description: 'AppKit React Ethers v5 Example',
    url: 'https://reown.com/appkit',
    icons: ['https://avatars.githubusercontent.com/u/179229932?s=200&v=4']
  },
  projectId,
  themeMode: 'light',
  features: {
    analytics: true
  },
  defaultAccountTypes: { 'eip155': 'eoa' }
})

export {
  modal,
  useAppKit,
  useAppKitState,
  useAppKitTheme,
  useAppKitEvents,

  useAppKitAccount,
  useWalletInfo,
  useAppKitNetwork,
  useDisconnect
}
