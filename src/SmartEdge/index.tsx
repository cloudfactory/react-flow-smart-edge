import { BezierEdge, BaseEdge } from '@xyflow/react'
import React from 'react'
import { getSmartEdge } from '../getSmartEdge'
import type {
	DefaultEdgeDataType,
	DefaultNodeDataType
} from './SmartEdge.types'
import type { GetSmartEdgeOptions } from '../getSmartEdge'
import type { EdgeProps, Node, StepEdge, StraightEdge } from '@xyflow/react'

export type EdgeElement =
	| typeof BezierEdge
	| typeof StepEdge
	| typeof StraightEdge

export type SmartEdgeOptions = GetSmartEdgeOptions & {
	fallback?: EdgeElement
}

export interface SmartEdgeProps<
	EdgeDataType extends DefaultEdgeDataType = DefaultEdgeDataType,
	NodeDataType extends DefaultNodeDataType = DefaultNodeDataType
> extends EdgeProps<EdgeDataType> {
	nodes: Node<NodeDataType>[]
	options: SmartEdgeOptions
}

export function SmartEdge<
	EdgeDataType extends DefaultEdgeDataType = DefaultEdgeDataType,
	NodeDataType extends DefaultNodeDataType = DefaultNodeDataType
>({
	nodes,
	options,
	...edgeProps
}: SmartEdgeProps<EdgeDataType, NodeDataType>) {
	const {
		sourceX,
		sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition,
		style,
		label,
		labelStyle,
		labelShowBg,
		labelBgStyle,
		labelBgPadding,
		labelBgBorderRadius,
		markerEnd,
		markerStart,
		interactionWidth
	} = edgeProps

	const smartResponse = getSmartEdge({
		sourcePosition,
		targetPosition,
		sourceX,
		sourceY,
		targetX,
		targetY,
		options,
		nodes
	})

	const FallbackEdge = options.fallback || BezierEdge

	if (smartResponse === null) {
		return <FallbackEdge {...edgeProps} />
	}

	const { edgeCenterX, edgeCenterY, svgPathString } = smartResponse

	return (
		<BaseEdge
			path={svgPathString}
			labelX={edgeCenterX}
			labelY={edgeCenterY}
			label={label}
			labelStyle={labelStyle}
			labelShowBg={labelShowBg}
			labelBgStyle={labelBgStyle}
			labelBgPadding={labelBgPadding}
			labelBgBorderRadius={labelBgBorderRadius}
			style={style}
			markerStart={markerStart}
			markerEnd={markerEnd}
			interactionWidth={interactionWidth}
		/>
	)
}

export type SmartEdgeFunction = typeof SmartEdge
