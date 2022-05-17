import styles from './projects.module.scss'

import Image from 'next/image'

export default function Projects ({ items }) {
    return <ul className={styles.projects}>
        {items.map((item, index) => {
            const { title, categories, featuredImage, slug } = item.node;
            return <li key={index}>
                {featuredImage &&
                <Image 
                    src={featuredImage.node.sourceUrl}
                    alt={featuredImage.node.altText}
                    width={featuredImage.node.mediaDetails.width}
                    height={featuredImage.node.mediaDetails.height}
                />
            }

                <h3>{title}</h3>
                <h4>{categories.edges[0].node.name}</h4>
                </li>
        })}
    </ul>
}
