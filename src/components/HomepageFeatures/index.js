import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Source',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        BISIMEYER is a easy to source open source bicycle simulator. All the parts
      are easy to access and publicly avaliable to everyone.
      </>
    ),
  },
  {
    title: 'Detailed Guide',
    Svg: require('@site/static/img/guide.svg').default,
    description: (
      <>
        BISIMEYER has a step-by-step guide of how to build and setup a bicycle simulator.
      </>
    ),
  },
  {
    title: 'Open Source Code',
    Svg: require('@site/static/img/openbook.svg').default,
    description: (
      <>
        BISIMEYER is open source project and is open to changes and optimization.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
