import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '@nextui-org/react'

// App imports
import getCertifications from '@services/certifications/getCertifications'
import Marquee from '@components/ui/Marquee'
import divideArrayToSubArray from '@libraries/divideArrayToSubarray'
import CertificationCard from '@components/certifications/CertificationCard'
import { useMemo } from 'react'

export default function CertificationsFeed() {
  const { data: certifications, isLoading } = useQuery({
    queryKey: ['certifications'],
    queryFn: getCertifications
  })

  const dividedCertifications = useMemo(() => {
    if (!certifications) return
    return divideArrayToSubArray({
      array: certifications,
      subArrayCount: 3
    })
  }, [certifications])

  return useMemo(() => (
    <>
      {isLoading && [[...Array(5).keys()], [...Array(5).keys()], [...Array(5).keys()]].map((skeletonGroup, index) => (
        <div className="col-span-12" key={`SkeletonCertificationGroup-${index}`}>
          <Marquee
            direction={index % 2 == 0 ? 'right' : 'left'}
            pauseOnHover={false}
          >
            {skeletonGroup.map((index) => (
              <Skeleton
                key={`CertificationSkeletonCard-${index}`}
                className='h-[200px] w-[250px] md:h-[300px] md:w-[350px] mx-4 rounded-xl'
              />
            ))}
          </Marquee>
        </div>
      ))}

      {dividedCertifications && dividedCertifications.map((certificationGroup, index) => (
        <div className="col-span-12" key={`CertificationGroup-${index}`}>
          <Marquee
            direction={index % 2 == 0 ? 'right' : 'left'}
            pauseOnHover={false}
          >
            {certificationGroup.map((certification, index) => (
              <CertificationCard
                key={`CertificationCard-${index}`}
                {...certification}
              />
            ))}
          </Marquee>
        </div>
      ))}
    </>
  ), [certifications, isLoading, dividedCertifications])
}
