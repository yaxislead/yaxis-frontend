import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import useYaxis from './useYaxis'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'

import { getAllowance } from '../utils/erc20'
import { getYaxisChefContract } from '../yaxis/utils'

const useAllowance = (lpContract: Contract) => {
	const [allowance, setAllowance] = useState(new BigNumber(0))
	const { account } = useWeb3React()
	const yaxis = useYaxis()
	const yaxisChefContract = getYaxisChefContract(yaxis)

	const fetchAllowance = useCallback(async () => {
		const allowance = await getAllowance(
			lpContract,
			yaxisChefContract?.options?.address,
			account,
		)
		setAllowance(new BigNumber(allowance))
	}, [account, yaxisChefContract, lpContract])

	useEffect(() => {
		if (account && yaxisChefContract && lpContract) {
			fetchAllowance()
		}
		let refreshInterval = setInterval(fetchAllowance, 1000)
		return () => clearInterval(refreshInterval)
	}, [account, yaxisChefContract, lpContract, fetchAllowance])

	return allowance
}

export default useAllowance
