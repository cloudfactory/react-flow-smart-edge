import { useNodes, StraightEdge } from '@xyflow/react'
import React from 'react'
import { SmartEdge } from '../SmartEdge'
import {
	svgDrawStraightLinePath,
	pathfindingAStarNoDiagonal
} from '../functions'
import type { SmartEdgeOptions } from '../SmartEdge'
import type { EdgeProps, Node } from '@xyflow/react'
import type {
	DefaultEdgeDataType,
	DefaultNodeDataType
} from 'SmartEdge/SmartEdge.types'

const StraightConfiguration: SmartEdgeOptions = {
	drawEdge: svgDrawStraightLinePath,
	generatePath: pathfindingAStarNoDiagonal,
	fallback: StraightEdge
}

export function SmartStraightEdge<
	EdgeDataType extends DefaultEdgeDataType = DefaultEdgeDataType,
	NodeDataType extends DefaultNodeDataType = DefaultNodeDataType
>(props: EdgeProps<EdgeDataType>) {
	const nodes = useNodes<Node<NodeDataType>>()

	return (
		<SmartEdge<EdgeDataType, NodeDataType>
			{...props}
			options={StraightConfiguration}
			nodes={nodes}
		/>
	)
}
