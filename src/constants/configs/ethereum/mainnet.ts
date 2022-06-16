import {
	EthereumConfig,
	EthereumCurrenciesConfig,
	EthereumExternalConfig,
	EthereumExternalPoolsConfig,
} from '../../type/ethereum'

const currencies: EthereumCurrenciesConfig = {
	ERC20: {
		crv: '0xd533a949740bb3306d119cc777fa900ba034cd52',
		wbtc: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
		link: '0x514910771af9ca656af840dff83e8264ecf986ca',
		mim: '0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3',
		cvx: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
		yax: '0xb1dc9124c395c1e97773ab855d66e879f053a289',
		usdc: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
		dai: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
		usdt: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
		'3crv': '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
		weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
		mvlt: '0xBFbEC72F2450eF9Ab742e4A27441Fa06Ca79eA6a',
		spell: '0x090185f2135308bad17527004364ebcc2d37e5f6',
		frax: '0x853d955acef822db058eb8505911ed77f175b99e',
		steth: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84'
	},
	ERC677: {
		yaxis: '0x0adA190c81b814548ddC2F6AdC4a689ce7C1FE73',
	},
}

const external: EthereumExternalConfig = {
	multicall: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
	pickleChef: '0xbD17B1ce622d73bD438b9E658acA5996dc394b0d',
	pickleJar: '0x1BB74b5DdC1f4fC91D6f9E7906cf68bc93538e33',
	uniswapRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
	gaugeController: '0x2F50D538606Fa9EDD2B11E2446BEb18C9D5846bB',
}

const externalPools: EthereumExternalPoolsConfig = {
	curve: {
		mim3crv: {
			currency: 'usd',
			pool: '0x5a6A4D54456819380173272A5E8E9B9904BdF41B',
			token: '0x5a6A4D54456819380173272A5E8E9B9904BdF41B',
			gauge: '0xd8b712d29381748dB89c36BCa0138d7c75866ddF',
			convexRewards: '0xFd5AbF66b003881b88567EB9Ed9c651F14Dc4771',
			extraRewards: {
				spell: {
					contract: '0x69a92f1656cd2e193797546cFe2EaF32EACcf6f7',
					token: '0x090185f2135308bad17527004364ebcc2d37e5f6',
				},
			},
		},
		rencrv: {
			currency: 'btc',
			pool: '0x93054188d876f558f4a66B2EF1d97d16eDf0895B',
			token: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
			gauge: '0xB1F2cdeC61db658F091671F5f199635aEF202CAC',
			convexRewards: '0x8E299C62EeD737a5d5a53539dF37b5356a27b07D',
		},
		alethcrv: {
			currency: 'eth',
			pool: '0xC4C319E2D4d66CcA4464C0c2B32c9Bd23ebe784e',
			token: '0xC4C319E2D4d66CcA4464C0c2B32c9Bd23ebe784e',
			gauge: '0x12dCD9E8D1577b5E4F066d8e7D404404Ef045342',
			convexRewards: '0x48Bc302d8295FeA1f8c3e7F57D4dDC9981FEE410',
		},
		linkcrv: {
			currency: 'link',
			pool: '0xF178C0b5Bb7e7aBF4e12A4838C7b7c5bA2C623c0',
			token: '0xcee60cfa923170e4f8204ae08b4fa6a3f5656f3a',
			gauge: '0xFD4D8a17df4C27c1dD245d153ccf4499e806C87D',
			convexRewards: '0x9700152175dc22E7d1f3245fE3c1D2cfa3602548',
		},
		'3pool': {
			currency: 'usd',
			pool: '0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7',
			token: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
			gauge: '0xbFcF63294aD7105dEa65aA58F8AE5BE2D9d0952A',
			convexRewards: '0x689440f2Ff927E1f24c72F1087E1FAF471eCe1c8',
		},
		crvcvxeth: {
			currency: 'usd',
			pool: '0xB576491F1E6e5E62f1d8F26062Ee822B40B0E0d4',
			token: '0x3A283D9c08E8b55966afb64C515f5143cf907611',
			gauge: '0x7E1444BA99dcdFfE8fBdb42C02F0005D14f13BE1',
			convexRewards: '0xb1Fb0BA0676A1fFA83882c7F4805408bA232C1fA',
			extraRewards: {
				cvx: {
					contract: '0x834B9147Fd23bF131644aBC6e557Daf99C5cDa15',
					token: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
				},
			},
		},
		crv3crypto: {
			currency: 'usd',
			pool: '0xD51a44d3FaE010294C616388b506AcdA1bfAAE46',
			token: '0xc4AD29ba4B3c580e6D59105FFf484999997675Ff',
			gauge: '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168',
			convexRewards: '0x9D5C5E364D81DaB193b72db9E9BE9D8ee669B652',
		},
		frax3crv: {
			currency: 'usd',
			pool: '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B',
			token: '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B',
			gauge: '0x72e158d38dbd50a483501c24f792bdaaa3e7d55c',
			convexRewards: '0xB900EF131301B307dB5eFcbed9DBb50A3e209B2e',
		},
		stethcrv: {
			currency: 'eth',
			pool: '0x9518c9063eB0262D791f38d8d6Eb0aca33c63ed0',
			token: '0x9518c9063eB0262D791f38d8d6Eb0aca33c63ed0',
			gauge: '0x182B723a58739a9c974cFDB385ceaDb237453c28',
			convexRewards: '0x0A760466E1B4621579a82a39CB56Dda2F4E70f03',
		},
	},
}

const mainnet: EthereumConfig = {
	internal: {
		// Current
		manager: '0xAB72cC293B63f6477BAf9d514Da735Cf6caADC2d',
		controller: '0x834ebCE3b3Fb5B9647d9398a1f6F44A2E831aC60',
		vaultHelper: '0x259ac58Aa39A64614af1afe6A4c266cFE09510cF',
		minter: '0x84b6532A366c9ea7000Ed618B9E957deFC355242',
		minterWrapper: '0x0167f82398775C1A1175d73E86CE06BfCfE3aac1',
		stableSwap3PoolConverter: '0x2eab685d85AA52E4d8b6699Ba5aAC3b0c3992C3B',
		votingEscrow: '0x66b4c0dAA0C65ED1eae84B4d738B9572a79389c4',
		gaugeController: '0x17F9F0dAc5066d43d0875Fa08E5757580BBf4C8C',
		feeDistributor: '0x2BedCEd99bc5cccA1E94F7b0b4DbE81f7bE201B8',
		// Legacy
		merkleDistributor: '0xd0c9432625a181c823b3e63d5e6656f87231ae96',
		swap: '0xCdF398537adbF8617a8401B14DCEe7F67CF8c64b',
		yaxisChef: '0xc330e7e73717cd13fb6ba068ee871584cf8a194f',
		xYaxStaking: '0xeF31Cb88048416E301Fee1eA13e7664b887BA7e8',
		yAxisMetaVault: '0xBFbEC72F2450eF9Ab742e4A27441Fa06Ca79eA6a',
	},
	rewards: {
		MetaVault: '0x226f9954A1221cDe805C76CfB312A5d761630E14',
		Yaxis: '0x3b09B9ADFe11f92225b4C55De89fa81456595CD9',
		'Uniswap YAXIS/ETH': '0xEDaFe410e2f07ab9D7F1B04316D29C2F49dCb104',
	},
	vaults: {
		usd: {
			url: 'https://curve.fi/mim/deposit',
			tokenPoolContract: externalPools.curve.mim3crv.pool,
			token: 'MIM3CRV',
			tokenContract: externalPools.curve.mim3crv.token,
			vault: '0x9720346Ba80b668E50A5560c200180515fEbb895',
			vaultToken: 'CV:USD',
			vaultTokenContract: '0x2C1e6D004d4f06F92464e0208b04D260b3eF46A5',
			gauge: '0x9a4A2a2E8f755b77eb512E8A8fE635B803950D51',
		},
		btc: {
			url: 'https://curve.fi/ren/deposit',
			tokenPoolContract: externalPools.curve.rencrv.pool,
			token: 'RENCRV',
			tokenContract: externalPools.curve.rencrv.token,
			vault: '0xFB3292cc870292D588B3DD7e03805986451CB1d2',
			vaultToken: 'CV:BTC',
			vaultTokenContract: '0x0C44393DA03216E934b3A5503DECF7f78174b2f3',
			gauge: '0x9AA02011a90736176f9CdC38FF4d1Ed7C90309b6',
		},
		eth: {
			url: 'https://curve.fi/factory/38/deposit',
			tokenPoolContract: externalPools.curve.alethcrv.pool,
			token: 'ALETHCRV',
			tokenContract: externalPools.curve.alethcrv.token,
			vault: '0xCAB23CA4E75E8A9F12EBCa7f51D6b3EFe97699e7',
			vaultToken: 'CV:ETH',
			vaultTokenContract: '0xeF84fAc432846Ad5f6f1bD4caCcF2849e2818e66',
			gauge: '0x43103fE8Bd1049f756370F831634812Eb4eFf7D3',
		},
		link: {
			url: 'https://curve.fi/link/deposit',
			tokenPoolContract: externalPools.curve.linkcrv.pool,
			token: 'LINKCRV',
			tokenContract: externalPools.curve.linkcrv.token,
			vault: '0x27d9A1dc3725Fa5E4e7128b1db7e9Da75eb3aeE5',
			vaultToken: 'CV:LINK',
			vaultTokenContract: '0x5f6e4DeA25086C973C31857A04a73c66Ef41e43C',
			gauge: '0x60fd915B2251dEc19C57eDD75B0a688EA0A3bfe5',
		},
		yaxis: {
			url: '',
			tokenPoolContract: '',
			token: 'YAXIS',
			tokenContract: '',
			vault: '',
			vaultToken: 'YAXIS',
			vaultTokenContract: currencies.ERC677.yaxis,
			gauge: '0x951E7726d70017E56756A6807886113708A699Fb',
		},
		cvx: {
			url: 'https://curve.fi/cvxeth/deposit',
			tokenPoolContract: externalPools.curve.crvcvxeth.pool,
			token: 'CRVCVXETH',
			tokenContract: externalPools.curve.crvcvxeth.token,
			vault: '0x274dd71DfBea338324242042A841d97246597872',
			vaultToken: 'CV:CVX',
			vaultTokenContract: '0xF92A829240683948e50e5092cDA57Bfb125989eD',
			gauge: '0x7b552Fd9cf50446D50163F876F23E8756B06fA00',
		},
		tricrypto: {
			url: 'https://curve.fi/tricrypto2/deposit',
			tokenPoolContract: externalPools.curve.crv3crypto.pool,
			token: 'CRV3CRYPTO',
			tokenContract: externalPools.curve.crv3crypto.token,
			vault: '0x6847B84c66C9a227D1A9fE577855B48d9CB03D81',
			vaultToken: 'CV:TRICRYPTO',
			vaultTokenContract: '0xf87E9A4d3Ab7185f54C332941AA7c62a550dB7cB',
			gauge: '0x3BE5f25B47233D0c5293DDc0848e1dA9399eBbD9',
		},
		frax: {
			url: 'https://curve.fi/frax/deposit',
			tokenPoolContract: externalPools.curve.frax3crv.pool,
			token: 'FRAX3CRV',
			tokenContract: externalPools.curve.frax3crv.token,
			vault: '0x305dC8cE1F37a247EcFe77741D1A15E256BEfcA6',
			vaultToken: 'CV:FRAX',
			vaultTokenContract: '0x5a1cdcAAd1D9BF1e9DA7D6dF6473091B059daFf6',
			gauge: '0x9947117cA458385E9Ac1b3088F43612846e5251B',
		},
		steth: {
			url: 'https://curve.fi/steth/deposit',
			tokenPoolContract: externalPools.curve.stethcrv.pool,
			token: 'STETHCRV',
			tokenContract: externalPools.curve.stethcrv.token,
			vault: '0x227cC2cbfEC2e77Bf29F804DAc48d001F74CBA2F',
			vaultToken: 'CV:STETH',
			vaultTokenContract: '0xfc68Fc6f84080C60d953e93e5046f013DF687ec0',
			gauge: '0x1B2C6C5dCC63D17513CD2e71875ff42C12c236B9',
		},
	},
	pools: {
		'Uniswap YAXIS/ETH': {
			active: true,
			legacy: false,
			type: 'uniswap',
			liquidId: `${currencies.ERC677.yaxis}/ETH`,
			lpAddress: '0xF0E3FdF48661CD10d56692f60BD4eCcd01E9CF64',
			lpUrl: `https://app.uniswap.org/#/add/v2/ETH/${currencies.ERC677.yaxis}`,
			lpTokens: [
				{
					tokenId: 'yaxis',
				},
				{
					tokenId: 'eth',
				},
			],
			tokenAddress: currencies.ERC677.yaxis,
			name: 'Uniswap YAXIS/ETH',
			symbol: 'YAXIS/ETH UNI-V2 LP',
			tokenSymbol: 'YAXIS_ETH_UNISWAP_LP',
			icon: '',
			rewards: 'Uniswap YAXIS/ETH',
		},
		'Uniswap YAX/ETH': {
			legacy: true,
			pid: 6,
			active: true,
			type: 'uniswap',
			liquidId: `${currencies.ERC20.yax}/ETH`,
			lpAddress: '0x1107b6081231d7f256269ad014bf92e041cb08df',
			lpUrl: `https://app.uniswap.org/#/add/v2/ETH/${currencies.ERC20.yax}`,
			lpTokens: [
				{
					tokenId: 'yax',
				},
				{
					tokenId: 'eth',
				},
			],
			tokenAddress: currencies.ERC20.yax,
			name: 'Uniswap YAX/ETH',
			symbol: 'YAX/ETH UNI-V2 LP',
			tokenSymbol: 'YAX_ETH_UNISWAP_LP',
			icon: '',
		},
		'Linkswap YAX/ETH': {
			legacy: true,
			pid: null,
			active: true,
			type: 'linkswap',
			liquidId: `${currencies.ERC20.yax}/ETH`,
			lpAddress: '0x21dee38170F1e1F26baFf2C30C0fc8F8362b6961',
			lpUrl: `https://linkswap.app/#/add/${currencies.ERC20.yax}/ETH`,
			lpTokens: [
				{
					tokenId: 'yax',
				},
				{
					tokenId: 'eth',
				},
			],
			tokenAddress: currencies.ERC20.yax,
			name: 'Linkswap YAX/ETH',
			symbol: 'YAX/ETH LINKSWAP LP',
			tokenSymbol: 'YAX_ETH_LINKSWAP_LP',
			icon: '',
		},
	},
	currencies,
	external,
	externalPools,
}

export default mainnet
