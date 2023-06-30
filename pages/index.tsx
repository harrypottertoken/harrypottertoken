import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { GetStaticProps } from 'next';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section
        id="hero"
        className="Section-Hero">
        <div className="Section-Bg-Image">
          <img
            src="images/bg-banner.jpeg"
            alt="logo"
          />
        </div>
        <div className="App-Container">
          <div className="Section-Content">
            <div className="Flexbox">
              <div className="Flexbox-Left">
                <h1>
                  <img
                    src="images/luigi-hero-words.png"
                    alt="Luigi's Time is here"
                  />
                  <img
                    src="images/luigi-hero-words-mobile.png"
                    alt="Rule the Crypto Kingdom"
                  />
                </h1>
                <p>
                  Jump into the fun-filled world of $HARRYPOTTER and awaken the
                  playful and adventurous spirit of Harry Potter.
                </p>
                <div className="Hero-Rewards">
                  <p>🔥 2% BURN</p>
                </div>
                <p>In buy and sell</p>
                <div className="Luigi-Socials">
                  <a
                    href="https://twitter.com/harrypotterbsc"
                    target="_blank">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABJCAYAAACesWDiAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARJSURBVHgB7ZvfcdNAEMbXnhSQoQFEeIcE3sFpgMlAAUmggIQGcFJBkgawU0EyvGdsKrDhHSRowKEAWPbjTsSW9eckS7qTo9/MjhPpZF0+7e3tnTZELS0tLS0tLS0tjYWZPbFNavknxqbYkdiVmM/LTMQGYnt0n9BeMuR8+GL9PN6l73OW1cgpd9Ueswp+lkfJ+Z7YSLffT2t4gIbkAKyG04jLox/5fnjLUeQeflanfN1wQBbR4ky4fM7Ezjk+foFU7+lFGvfJEqyCcN2cZ3XqPOai2kViFVjrZmLSsVHCxbUNN1ZxYcb1Am/dnOsDRlJf7DjaOT/lSxAPPKoYzj+Vr8oxq4eCyWk+Nk3iOpcFLt6mCuH0h1Q2M473Vp/jnIHNqSQuyffusX18nhOnG+ljQGaccJLKq9EjuwRiu51OJwgPRAW6JXM8MYg0KFGop2SPgCLigKhAnyk/B2IjVlHfo9XwyA5TihFnCV5OFIuM30FRobjeAB0yTutTN0bJPMMsikfKo3xWuUUTthxS114LAomLQZwLKgeIA5FmWqx9A89a5eFUQid6gFVGCVWr2vIISHnqF7rz2Ckejtx7KD/vU70M5d6HSSc3ogd0R3HBFVWDp21h+Mk9yUW6cQdFpGsqb6i5zo+0k/8FYrX/4oW/i0hYqF3S+pMa96IehNlnFAZUEelAjp3SepM6iy0Eacw4tBicwyC6TdUFbdvsiCNMk05GBcISv9LVumuIOJ2082UsNZrMNKtBVKBrul/kE0i8bUwOZrMVMs5qEJcHrfusNU9mSIkNUPckWGN5s5PVqJtwHEuNdR9qRklw0lIDweu92B9aX4wmpCQPgkhD+XhH6ynSOHP3UNNNO6lFei72ndaLoWnDjkkjvYj9QGqvpkvNJpAH/8i0ceYfq/dpArG3Yo9JpQGZCZbD5Nqh2DBog20PeNov/Ts+kT9g8epRswgox/ACJgJBCGtlMCVzaRqcQzJjUA171HURkMm7rwiZMajkNx02OckrDjCdxeA9N2LPqJkg79mlAhgJBPRUD5G2qFlgBOwU8R5gnNPoG7yh5iWNp0XFAcYeFNIwT0p9KVgpIhRqhH6zu/hsuyCeVW3fR7FvrMRyRTCfS6pZyj3EkmBVu/hSDOscFEL1yA4rBeXKEIFgXbHXXH8Zb8iMKy4yzY0WBrbFdqrjQ3x2RRy+EwX2gFXAtuU1zNUUlBYWJBxKLggDRlyhOB02q8sJE0pMm9g0e0X2S3bBha5CqQxsd2DcIvL/1Mc258wTeyj2hJQgHrlBIHaoX3RWC9/lMi4nffNgWNefALIqAQ4TPhcZsc1AHMLqv15u2B2hkDr0yDV4eRlRJ5gZ7QylCKYbZqhIxcyFpYSnD5f1+id8MYliyk9i17UEX0OKbHdg1oO9IDXDFSnPC0i9OoIoX0mJ4mQtQCmLVT0UwjTfi2lyqy3Ap6titLS0tLQ0jL+PMiKYHI8FbwAAAABJRU5ErkJggg=="
                      alt="logo"
                    />
                  </a>
                  <a
                    href="https://t.me/harrypotterfinance"
                    target="_blank">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABLCAYAAADTecHpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATtSURBVHgB7ZzxddpIEMY//PL/kQpuXUFIBadUEHcQUsE5FZyowHYFtitIrgIpFZhUgFJBSAWTGe+KgJCEVrsrrXB+7w02NgL0Mbs7OzMI+EMrMwwMEc35x4LtDdsl219sim1uTCjMzy3bd7YN2ze29Ww222JAggu0J8gV23toMVxYG3tksXJMFRYmYbtl+0HhkOe+l9fCVDDCZDQ8T2wfECtGmCcanw3FJBS/GUXjeMwpPrMpjAm/gX8p7Bzjg/8wNPyic4rTa5ro7U3Wy7x5oQzuy/XQFGzvODQobA6yEojFkXhGxJljmkiQKSKtux5w0fWBpGONKYsjyHvP+Fyuuh7QyYPOwHOqdPakkwKZOecJ5yNOSSeRWofY3oR8buIIck4nV7dTc9A9prda2aCgz7GRRoFIB1gJzh/ZIl03/bN2DjJut8HL4m3dfNTkQRleHjd1fzwSiL1nifOed5qQoXaUBTgaYvwgGVoKLxNZ+i/307oHHvSCvadElv6DCfvAgybuPQUOE/992bIHvS7v7Dxogt4jw+CB7R3baz6pS3NiX+DGnOpy3CZnMgUy0om6Wk/hvy/Jnd0qPjNPqhB33CPe8sj25VSph35nHVwRr9y+MncSxEkOPWQeLQqGC/hhyXZbzkHvEQ8ihIgiO22xO8tqqq+NdSI3MXmQiHDHdutYXn4DP/wjN69IJ8PGTGfkbCuPZWRf5yKr2UI8yNeYtaHzpNsDn+ezuMCwAokwK+hw/rqLOKRLTDdm+Z2feiz8joZnD/I1ZtvI2WSytQriSCfXJaElJ73qMDf5/rCVvImQ9fTP1KPzgnQ5ez9wTTsed0V+eXref5FfpBSd0onh0HKS1XJ2anFsSn7ZgPyRUcsWoMPJ1TVBpJbP4X275EOgjBwbmPj4D3TcBJHCEgowXbgI5NxeQnqFqvvUl+gBBaDvk7qmFMoJteo1cn+JHvBxCwqALPMF7PNAf/Ox8z5bAtJzlCzd1fq4dWNBhRC7gW3n5oUKEm/IeJcmzc6xB+m4RtIqVXEKuIlTviffFL5m/g21dJvScVxTPVbBEQqT8MtkiP2EOwo6fyLZPLmfQzd+CxKpJw3HFejR1NRAiCH2bUa67HqDcbj0JM7zYgP/fJI5yGXcu/DgUZxQG+71mAIp+EMhDOsLs1TnGJ6E/LXohvCgXLQpl/mvGIfU0yoWImXzv9yUAuUYD8W2cfQmBf/kcrMrPZMuliUYlwI9lv0AK1ghlVr5ZT+SHmuY7aNg6U0U5qtQafnLvkC30PuhGLCZm7o8xpads+wEMqvZHeJBoZs3JfDLQXxWbX+RcF02k2PWyerI2T7WzU3kv2XnILo/2M1H6EUlCfRXCA6am4x3Kfjjrvoh1LXgxepFJfIhSvSv4FecAjUr6FE+yHjRCvEiH1wC/5NzWjeEG7+rEUlcNBQyMX+s+0ebQArT/OKcLQVagtPWb/uQv26tmHnbluptzUmb5oJPOF9WjnlwDfkv6cZACp/QeYmUIgR0HiKlCAlNW6RrDAHpsvGGpoOUtBMMCcV7zY4qGY15DQ9+8WuK05vEa4YZUqcg7U0PFA/31LORKyg0vlAZTeFqVHtCbSg8Tj2Ro0P6ylS+xRJRpPUmQWCsL4/jAukaemlS7FM4nS0ooBNk383P3FdNvwuDCtQE1XfIb2cDXzPxDz34BW2X7TDBcTzEAAAAAElFTkSuQmCC"
                      alt="logo"
                    />
                  </a>
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=tokenaqui"
                    target="_blank">
                    <img
                      src="data:image/png;base64,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"
                      alt="logo"
                    />
                  </a>
                  <a
                    href="https://poocoin.app/tokens/tokenaqui"
                    target="_blank">
                    <img
                      src="data:image/png;base64,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"
                      alt="logo"
                    />
                  </a>
                  <a href="mailto:marketing@harrypotter.finance">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABJCAYAAACesWDiAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgB7ZvrcdpAFIWvaCCUAK4gTgW4g2RSQPDkd8YwKSA0kIkriO0KSCoACsjEDTirDkIKiK/vYXd5LEjioQeg+80ckAavRjres9JKV0SKoiiKoiiKoii5Ey2vMHNTvj6IOqLXVB+mTveiSRRFsf9hbpCYA2NuRU2qN7FoICY9YGVmkJhzQ9YcZUEXJkViTktWfpP2nBBErt2QjwGpOZuAJz30IPSeOg3IuxDDICYlkQYpqcCgR1KSeIRBP0lJ4jZyV88YqFukLBOLrhpyMYTz/Tuy533FMvMEU47ZIC0LGIcuybpWd2LRlfNkcRZzEzSY9ED1Bcd+6c0BK6d5xE3UlcU+1QtEqo9jd0POnCiphZujjej8B++Y7Hiz8XKnIUYMnRkr1CRya5Hy4OwuGmEBGFHifEx+6/F58VfUSzneDltPmIKGX1IatXyjE8dweme4Wf5j2rCBjZFb6nb3fLpg35spxzYKG1DChgyfV+S2jlQIZWz4HCJneIdIhWQZBE45cjtHKmQbg4Dh04rc3pEK2dYgzylEzvABkQrZ1SBwzJE7OFIh+xgEDB9X5HKLVMi+BnmOIXKGc4xUyKEGAUSuzRsejrDt1neiZy6G3CMVkodBwIjeuO1RQuT+c34UFqmQvAzyDES4Q0AJkXviwzFcYKRC8jYIIHIXnBy577x/byo8UiFFGAQM5xu50iIVUpRBnjwiZ7jESIUUbRA4JHKlRyqkDIOA4fTIdXk1IpVFKqQsgzyJkVuKXYtS4IIjFVJF+csP0WfRH6zIDfOtGrGN2pBsgWlpVFUfFIvek60seZ7tSIpRsosd+bqjCh5BVVUf1BL9En0VXSTtB9uB+BtV+HzuWCrMELux6J9bfyV6S7Y0sNL6SS3By0BL8DJQgzJQgzJQgzKAQTEpSUy1DDidCQyqc8ldFkP/OtQT2StaZUEs05+2H6Q/kpsTKXOu8eHLgMdkZ9hqkqXvPFl7ZxXzH0wgW1TPS4BYdO3NAWv3GNx9Fxj1icp9j6zKf8hYNCG8m7FtGTBwZp3724jT0BRFURRFUWrBC6LcVldBE7KcAAAAAElFTkSuQmCC"
                      alt="logo"
                    />
                  </a>
                  <a
                    href="https://bscscan.com/token/tokenaqui"
                    target="_blank">
                    <img
                      src="data:image/png;base64,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"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="Luigi-Buttons">
                  <a
                    href="https://t.me/harrypotterfinance"
                    target="_blank">
                    Join Telegram
                  </a>
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=tokenaqui"
                    target="_blank">
                    Buy $HARRYPOTTER
                  </a>
                </div>
              </div>
              <div className="Flexbox-Right">
                <img
                  src="images/harry.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="Section-About"
        style={{
          backgroundImage: `url('images/bg-pattern-diddy-3.jpeg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover !important',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%)',
          }}></div>
        <div
          className="Section-Border"
          style={{
            backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAABTklEQVR4AWJwL/ChGAPYnQPNhKIAAMNVShKJiHBfNmADAQGBQCAIBEEQghAu9SbfGDDbtqpzz7k4/wP8PswwC/EKgXkHwFtSEOa+N48OQhMLv7dAMwoILSz93xKtSkFoY+X+VmhXAkIHa4+3RicoCF1sPN8G3SAg9LD1elv0XgKhj51w7dB/CoQB9sK3x+AhEIY4qK4DhneBMMJR9R0x+hOEMU7idcL4RxAmOIvfGZMvIExxka4Lpp8gFCilr0TRwE19ujXUrAzKoAzKoERlUAZdca0LqESBD9bsnABgIACB4OqPiNNwEtPnf8YBJQykxqSKlSp6qeqpqnConLOxEJovbE6FBh4bnKEJzCZ5CAkYWoQYBbHOfaD5FJpewNe8CUQojtFgCCsBnp4HGh849ysvj30gBN4K4EOXALsoUqcJCLWsAzuIStNKVJvmAgBgvSfoAPxfAAAAAABJRU5ErkJggg==')`,
          }}></div>
        <div className="App-Container">
          <div className="Section-Content">
            <h2>
              A delightfully decentralized, perpetual memecoin for all the
              fun-loving adventurers who are excited to embark on a journey
              through the universe of cheerful mayhem!
            </h2>
            <div className="Flexbox">
              <div className="Flexbox-Left">
                <img
                  src="images/diddy-kong-2sjs.png"
                  alt="logo"
                />
              </div>
              <div className="Flexbox-Right">
                <p>
                  In the vibrant heart of the digital universe, a playful force
                  is waking up, channeling the vivacious spirit of Harry
                  Potter...
                </p>
                <p>
                  Welcome to the world of a unique digital currency, born from
                  joy and excitement, reflecting the intelligent and inventive
                  essence of our favorite cape-wearing hero:
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=tokenaqui"
                    target="_blank">
                    Harry Potter
                  </a>
                </p>
                <p>
                  For this memecoin to thrive, we need to grow an upbeat
                  community, a meeting of jesters and jokers driven by boldness,
                  innovation, and an unabashed sense of fun. Our harmonious
                  blend of chaos and camaraderie will be the rocket fuel for
                  sending $HARRYPOTTER to the moon!
                </p>
                <p>
                  Heed the call of fun you feel within. Embrace your inner
                  maverick, and join the ranks of Harry Potter on BSC. Together
                  we will rejoice in the glory of our success.
                </p>
                <div className="Luigi-Buttons">
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=tokenaqui"
                    target="_blank">
                    Buy $HARRYPOTTER
                  </a>
                  <a
                    href="https://t.me/harrypotterfinance"
                    target="_blank">
                    Join Us on Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tokenomics"
        className="Section-Tokenomics"
        style={{
          backgroundImage: 'url("images/bg_tokenomics.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover !important',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundColor: '#000',
        }}>
        <div
          className="Section-Border"
          style={{
            backgroundImage:
              'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAABTklEQVR4AWJwL/ChGAPYnQPNhKIAAMNVShKJiHBfNmADAQGBQCAIBEEQghAu9SbfGDDbtqpzz7k4/wP8PswwC/EKgXkHwFtSEOa+N48OQhMLv7dAMwoILSz93xKtSkFoY+X+VmhXAkIHa4+3RicoCF1sPN8G3SAg9LD1elv0XgKhj51w7dB/CoQB9sK3x+AhEIY4qK4DhneBMMJR9R0x+hOEMU7idcL4RxAmOIvfGZMvIExxka4Lpp8gFCilr0TRwE19ujXUrAzKoAzKoERlUAZdca0LqESBD9bsnABgIACB4OqPiNNwEtPnf8YBJQykxqSKlSp6qeqpqnConLOxEJovbE6FBh4bnKEJzCZ5CAkYWoQYBbHOfaD5FJpewNe8CUQojtFgCCsBnp4HGh849ysvj30gBN4K4EOXALsoUqcJCLWsAzuIStNKVJvmAgBgvSfoAPxfAAAAAABJRU5ErkJggg==")',
          }}
        />
        <div className="Section-Border-Image"></div>
        <div className="Section-Border-Image up-down">
          <img
            src="images/banana.png"
            alt="logo"
            className="Animation-UpDown"
          />
        </div>
        <div className="Section-Border-Image">
          <img
            src="images/moon.png"
            alt="logo"
          />
        </div>
        <div className="App-Container">
          <div className="Section-Content">
            <h2>Tokenomics</h2>
            <p>
              Fans of Harry Potter now have a new way to immerse themselves in
              the enchanting world of Hogwarts and the adventures of the world's
              most famous wizard. A new token inspired by Harry Potter has
              emerged on the Binance Smart Chain (BSC) network, bringing the
              magic of the wizarding world to the realm of cryptocurrencies.
            </p>
            <p>
              100% of the LP is locked.
              <br />
              Contract is renounced.
            </p>
            <div className="Luigi-Stats Luigi-Stats-Desktop">
              <div className="Luigi-Stats-Row">
                <div className="Luigi-Stat">
                  <span>8%</span>
                  <span>
                    Marketing
                    <br />
                    Buy/Sell
                  </span>
                </div>
                <div className="Luigi-Stat">
                  <span>2%</span>
                  <span>
                    Burn
                    <br />
                    Buy/Sell
                  </span>
                </div>
              </div>
            </div>
            <div className="Luigi-Stats Luigi-Stats-Mobile">
              <div className="Luigi-Stats-Row">
                <div className="Luigi-Stat">
                  <span>8%</span>
                  <span>
                    Marketing
                    <br />
                    Buy/Sell
                  </span>
                </div>
                <div className="Luigi-Stat">
                  <span>2%</span>
                  <span>
                    Burn
                    <br />
                    Buy/Sell
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="roadmap"
        className="Section-Roadmap"
        style={{
          backgroundImage: 'url("images/bg-roadmap.jpeg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover !important',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          paddingBottom: '20px',
        }}>
        <div
          className="Section-Border"
          style={{
            backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAABTklEQVR4AWJwL/ChGAPYnQPNhKIAAMNVShKJiHBfNmADAQGBQCAIBEEQghAu9SbfGDDbtqpzz7k4/wP8PswwC/EKgXkHwFtSEOa+N48OQhMLv7dAMwoILSz93xKtSkFoY+X+VmhXAkIHa4+3RicoCF1sPN8G3SAg9LD1elv0XgKhj51w7dB/CoQB9sK3x+AhEIY4qK4DhneBMMJR9R0x+hOEMU7idcL4RxAmOIvfGZMvIExxka4Lpp8gFCilr0TRwE19ujXUrAzKoAzKoERlUAZdca0LqESBD9bsnABgIACB4OqPiNNwEtPnf8YBJQykxqSKlSp6qeqpqnConLOxEJovbE6FBh4bnKEJzCZ5CAkYWoQYBbHOfaD5FJpewNe8CUQojtFgCCsBnp4HGh849ysvj30gBN4K4EOXALsoUqcJCLWsAzuIStNKVJvmAgBgvSfoAPxfAAAAAABJRU5ErkJggg==')`,
          }}
        />
        <div className="App-Container">
          <div className="Section-Content">
            <h2>Roadmap</h2>
            <div className="Panels">
              <div className="Panel">
                <div className="Panel-Dot Panel-Dot-1" />
                <div className="Panel-Dot Panel-Dot-2" />
                <div className="Panel-Dot Panel-Dot-3" />
                <div className="Panel-Dot Panel-Dot-4" />
                <div className="Panel-Content">
                  <img
                    src="images/phase1.webp"
                    alt="logo"
                  />
                  <h3>Phase 1</h3>
                  <ul>
                    <li>Contract Deployment</li>
                    <li>Website &amp; Telegram Launch</li>
                    <li>Social Media Launch</li>
                    <li>Community Building</li>
                    <li>Biggest Buy Contests</li>
                    <li>Trending List &amp; Ad Buys</li>
                  </ul>
                </div>
              </div>
              <div className="Panel">
                <div className="Panel-Dot Panel-Dot-1" />
                <div className="Panel-Dot Panel-Dot-2" />
                <div className="Panel-Dot Panel-Dot-3" />
                <div className="Panel-Dot Panel-Dot-4" />
                <div className="Panel-Content">
                  <img
                    src="images/phase1.webp"
                    alt="logo"
                  />
                  <h3>Phase 2</h3>
                  <ul>
                    <li>CG &amp; CMC Listings</li>
                    <li>Viral Twitter Contest &amp; Twiter Spaces Event</li>
                    <li>Twitter Influencer Partnerships</li>
                    <li>Press Release &amp; Article Blitz</li>
                    <li>Community Enhancement</li>
                  </ul>
                </div>
              </div>
              <div className="Panel">
                <div className="Panel-Dot Panel-Dot-1" />
                <div className="Panel-Dot Panel-Dot-2" />
                <div className="Panel-Dot Panel-Dot-3" />
                <div className="Panel-Dot Panel-Dot-4" />
                <div className="Panel-Content">
                  <img
                    src="images/phase1.webp"
                    alt="logo"
                  />
                  <h3>Phase 3</h3>
                  <ul>
                    <li>Banner Ads</li>
                    <li>First CEX Listing</li>
                    <li>Community Collaboration &amp; Strategy Session</li>
                    <li>Phase 4 Gameplan Announcement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
