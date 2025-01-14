import type { Edge } from '@xyflow/react'

export type DefaultEdgeDataType = Edge<
	Record<string, unknown>,
	string | undefined
>
export type DefaultNodeDataType = Record<string, unknown>
