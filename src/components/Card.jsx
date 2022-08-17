import { Avatar, Button, Grid, Text } from '@nextui-org/react'
import Image from 'next/image'
import cardBg from '../assets/cardBg.jpg'

function Card() {
    return (
        <div style={
            {
                width: 400,
                paddingBottom: 15
            }
        } className="shadow-lg rounded">
            <Image
                alt='Card Background'
                style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                src={cardBg}
                height={800}
                objectFit='cover'
            />
            <Avatar
                src='https://res.cloudinary.com/dkvy71id6/image/upload/v1659936241/profile_xtd1t8.jpg'
                squared size='xl'
                style={{ margin: '-40px auto 0 auto' }}
            />
            <div style={{ padding: '15px', textAlign: 'center' }}>

                <Text weight={'bold'} size={18} style={{ marginBottom: 10 }} >Ruben Reyes - Fullstack dev</Text>
                <Text>2 años de experiencia en desarrollo web, asi como conocimientos sólidos en desarrollo móvil y full stack </Text>
            </div>
            <Grid.Container justify='center' gap={2}>
                <Grid >

                    <Button as='a' href='https://github.com/redareyes03' size={'sm'} css={
                        {
                            bgColor: '#262626',
                            '&:hover': {
                                bgColor: '#141414'
                            }
                        }
                    } >Github</Button>
                </Grid>
                <Grid>

                    <Button as='a' href='https://www.linkedin.com/in/ruben-dreyes/' size={'sm'} css={
                        {
                            bgColor: '#0e76a8',
                            '&:hover': {
                                bgColor: '#296d8d'
                            }
                        }
                    } >Linkedin</Button>
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default Card