import React, { useState } from 'react'

export const FlashcardComponent = ({ dataSource, onSound, onChange, onFinish }) => {
  const [step, setStep] = useState(1)
  const [side, setSide] = useState("front")
  const [isFinish, setIsFinish] = useState(true)

  const handleChangeSide = () => {
    const newSide = side === "front" ? "back" : "front"
    setSide(newSide)
    onChange(step, newSide)
  }

  const handlePrev = () => {
    const prevStep = step > 1 ? step - 1 : 1
    setStep(prevStep)
    onChange(prevStep, side)
  }

  const handleNext = () => {
    const max = dataSource.length
    setIsFinish(step + 1 > max)
    const nextStep = step < max ? step + 1 : max
    setStep(nextStep)
    onChange(nextStep, side)
  }

  const handleSpeaker = () => {
    const text = dataSource[step - 1][side].text
    onSound(text)
  }

  const handleStartOver = () => {
    setStep(1)
    setSide("front")
    setIsFinish(false)
  }

  return (
    <div style={Styles.container}>
      {
        isFinish ? (
          <div style={Styles.finishContainer}>
            <h2 style={{ marginTop: 0, marginBottom: 10 }}>Nice work!</h2>
            <p style={{ margin: 0 }}>You just studied {dataSource.length} term!</p>
            <button style={Styles.startOverButton} onClick={handleStartOver}>Start over</button>
            <button style={Styles.startOverButton} onClick={onFinish}>Finish</button>
          </div>
        ) : (
            <div>
              <div style={Styles.progress}>
                <div style={Styles.bar}>
                  <span style={{ ...Styles.complete, width: `${step / dataSource.length * 100}%` }}></span>
                </div>
                <div style={Styles.number}>
                  {`${step}/${dataSource?.length}`}
                </div>
              </div>
              <div style={Styles.card}>
                <img style={Styles.soundButton} src="https://www.flaticon.com/svg/static/icons/svg/786/786272.svg" onClick={handleSpeaker} />
                <div style={Styles.cardContent} onClick={handleChangeSide}>
                  {
                    side === "front" ? (
                      <div style={Styles.front}>
                        {
                          dataSource[step - 1]?.front?.image && <img width="40%" height="40%" src={dataSource[step - 1]?.front?.image} />
                        }
                        <p>{dataSource[step - 1]?.front?.text}</p>
                      </div>
                    ) : (
                        <div style={Styles.back}>
                          {
                            dataSource[step - 1]?.back?.image && <img width="40%" height="40%" src={dataSource[step - 1]?.back?.image} />
                          }
                          <p>{dataSource[step - 1]?.back?.text}</p>
                        </div>
                      )
                  }
                </div>
              </div>
              <div style={Styles.navigation}>
                <div style={Styles.prevButton} onClick={handlePrev}>
                  <img width="100%" height="100%" src="https://www.flaticon.com/svg/static/icons/svg/318/318276.svg" />
                </div>
                <div style={Styles.nextButton} onClick={handleNext}>
                  <img width="100%" height="100%" src="https://www.flaticon.com/svg/static/icons/svg/467/467152.svg" />
                </div>
              </div>
            </div>
          )
      }
    </div>
  )
}

const Styles = {
  container: {
    backgroundColor: "#f6f7fb",
  },
  progress: {
    backgroundColor: "#ffffff",
    height: 45,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  bar: {
    display: "flex",
    flex: 3,
    backgroundColor: "#c5cfe8",
    height: "0.75rem",
    position: "relative",
  },
  complete: {
    backgroundColor: "#4257b2",
    bottom: 0,
    display: "block",
    height: "0.75rem",
    left: 0,
    maxWidth: "100%",
    position: "absolute",
    top: 0,
    transition: "all .12s cubic-bezier(.47,0,.745,.715)",
  },
  number: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    fontSize: "0.625rem",
    letterSpacing: "0.0625rem",
    fontWeight: 600,
  },
  card: {
    height: 400,
    padding: 16,
    position: "relative",
  },
  cardContent: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "1.5rem",
  },
  soundButton: {
    position: "absolute",
    width: 25,
    height: 25,
    right: 26,
    top: 26,
  },
  navigation: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  prevButton: {
    width: 30,
    height: 30,
    marginLeft: 16,
    backgroundColor: "#ffffff",
    borderRadius: "50%",
  },
  nextButton: {
    width: 30,
    height: 30,
    marginRight: 16,
    backgroundColor: "#ffffff",
    borderRadius: "50%",
  },
  finishContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "300px",
  },
  startOverButton: {
    backgroundColor: "#4257b2",
    width: "60%",
    height: "50px",
    border: "none",
    borderRadius: "5px",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: 30,
  },
}