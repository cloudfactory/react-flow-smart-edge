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
	EdgeDataType extends DefaultEdgeDataType = DefaultEdgeDataType,
	NodeDataType extends DefaultNodeDataType = DefaultNodeDataType
>(props: EdgeProps<EdgeDataType>) {
	const nodes = useNodes<Node<NodeDataType>>()

	return (
		<SmartEdge<EdgeDataType, NodeDataType>
			{...props}
			options={BezierConfiguration}
			nodes={nodes}
		/>
	)
}
