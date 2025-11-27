import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

const FeatureList = [
  {
    title: "Multi-Currency Support",
    icon: "fa-solid fa-coins",
    description: (
      <>
        SMPx allows you to create highly customizable currencies with unique
        identifiers, denominations and symbols.
      </>
    ),
  },
  {
    title: "Moderation Tools",
    icon: "fa-solid fa-screwdriver-wrench",
    description: (
      <>
        Handy moderation features give your staff everything they need to keep
        things running smoothly.
      </>
    ),
  },
  {
    title: "Plenty of new features",
    icon: "fa-solid fa-pizza-slice",
    description: (
      <>
        Packed with features that add extra depth and convenience to your server
        experience.
      </>
    ),
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <FontAwesomeIcon icon={icon} className={styles.featureIcon} />
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
