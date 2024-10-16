import { memo, Fragment, useState } from "react";

//component
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { sectionSliders } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const OnlyOnWilluminatyTV = memo(() => {
  const { t } = useTranslation();
  const [onlyonWilluminatyTV] = useState(sectionSliders);
  return (
    <Fragment>
      <SectionSlider
        title={t("ott_home.only_on_WilluminatyTV")}
        list={onlyonWilluminatyTV}
        className="WilluminatyTV-block"
        // loop={true}
        paddingY="my-4"
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={t(data.title)}
            movieTime={t(data.movieTime)}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

OnlyOnWilluminatyTV.displayName = "OnlyOnWilluminatyTV";
export default OnlyOnWilluminatyTV;
