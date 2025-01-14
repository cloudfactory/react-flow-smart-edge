import { useNodes, BezierEdge } from '@xyflow/react'
import React from 'react'
import { SmartEdge } from '../SmartEdge'
import { svgDrawSmoothLinePath, pathfindingAStarDiagonal } from '../functions'
import type { SmartEdgeOptions } from '../SmartEdge'
import type { EdgeProps, Node } from '@xyflow/react'
import type {
	DefaultEdgeDataType,
	DefaultNodeDataType
} from 'SmartEdge/SmartEdge.types'

const BezierConfiguration: SmartEdgeOptions = {
	drawEdge: svgDrawSmoothLinePath,
	generatePath: pathfindingAStarDiagonal,
	fallback: BezierEdge
}

export function SmartBezierEdge<
	TEdgeDataType extends DefaultEdgeDataType = DefaultEdgeDataType,
	TNodeDataType extends DefaultNodeDataType = DefaultNodeDataType
>(props: EdgeProps<TEdgeDataType>) {
	const nodes = useNodes<Node<TNodeDataType>>()

	return (
		<SmartEdge<TEdgeDataType, TNodeDataType>
			{...props}
			options={BezierConfiguration}
			nodes={nodes}
		/>
	)
}
