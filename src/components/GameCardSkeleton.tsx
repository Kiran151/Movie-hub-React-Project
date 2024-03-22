import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Skeleton borderRadius={10} height={300} width={300} />
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton