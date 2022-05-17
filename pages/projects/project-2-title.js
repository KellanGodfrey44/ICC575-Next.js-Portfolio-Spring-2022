import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Paragraph from '../../components/Paragraph'

const ProjectTwoPage = () => {
    return <Layout>
        <Container>
            <Image
                src="/images/02.jpg"
                alt="Rocky coast landscape"
                width={1500}
                height={1000}
                layout="responsive"
            />
            <Heading level="1">Project 2 Title</Heading>
            <Paragraph>This si a discription about my project.

            </Paragraph>
        </Container> 
    </Layout>
}
export default ProjectTwoPage