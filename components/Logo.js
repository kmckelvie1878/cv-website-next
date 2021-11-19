import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 40px;
    line-height: 20px;
    padding: 10px;
    &:hover img {
        transform: rotate(-10deg);
    }
`

const Logo = () => {
    const billyImg = `/images/logo${useColorModeValue('-dark', '')}.svg`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={billyImg} width={20} height={20} alt="Kieran McKelvie" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS 2'
                        fontWeight="bold"
                        ml={2}
                    >
                        Kieran McKelvie
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo