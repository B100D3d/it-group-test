import React, { useCallback, useEffect, useRef, useState } from "react"
import styles from "./slider.module.sass"
import useSliderItem from "hooks/useSliderItem"
import classNames from "classnames"
import Arrow from "components/Slider/Arrow/Arrow"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition"
import Pagination from "components/Slider/Pagination/Pagination"

interface SliderProps {
    interval?: number
    className?: string
    animationNextClassNames?: string | CSSTransitionClassNames
    animationPrevClassNames?: string | CSSTransitionClassNames
    animationTimeout?: number
}

const Slider: React.FunctionComponent<SliderProps> = ({
    children,
    interval,
    className,
    animationNextClassNames = "fade-right-slide",
    animationPrevClassNames = "fade-left-slide",
    animationTimeout = 1000,
}) => {
    const [item, next, prev, to, index] = useSliderItem(
        React.Children.toArray(children),
        { interval, timeout: animationTimeout }
    )
    const [animationClassNames, setAnimationClassNames] = useState(
        animationNextClassNames
    )

    const handleNext = useCallback(() => {
        setAnimationClassNames(animationNextClassNames)
        next()
    }, [])

    const handlePrev = useCallback(() => {
        setAnimationClassNames(animationPrevClassNames)
        prev()
    }, [])

    const handleTo = useCallback(
        (i: number) => {
            setAnimationClassNames(
                i > index ? animationNextClassNames : animationPrevClassNames
            )
            to(i)
        },
        [index]
    )

    return (
        <div className={classNames(styles.slider, className)}>
            <div className={styles.contentContainer}>
                <TransitionGroup
                    childFactory={(child) =>
                        React.cloneElement(child, {
                            classNames: animationClassNames,
                        })
                    }
                >
                    <CSSTransition
                        key={index}
                        classNames={animationClassNames}
                        timeout={animationTimeout}
                    >
                        {item}
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <div className={styles.navigation}>
                <Pagination
                    numOfPages={React.Children.count(children)}
                    activePage={index}
                    onClick={handleTo}
                />
                <div className={styles.arrowsContainer}>
                    <Arrow direction="left" onClick={handlePrev} />
                    <Arrow direction="right" onClick={handleNext} />
                </div>
            </div>
        </div>
    )
}

export default Slider
