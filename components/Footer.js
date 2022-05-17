import styles from './footer.module.scss'

import Col from './Col'
import Container from './Container'
import Logo from './Logo'
import Nav from './Nav'
import Row from './Row'

export default function Footer() {
    return <footer className={styles.footer}>
        <Container>
        <Row>
            <Col xs="6" sm="3">
                <Logo />
            </Col>
            <Col xs="6" sm="9">
                <Nav />
            </Col>   
        </Row>
    </Container>
        </footer>
} 
