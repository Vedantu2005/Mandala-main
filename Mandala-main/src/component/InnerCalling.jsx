import React from 'react';
import { Check } from 'lucide-react';

const InnerCallingSection = () => {
  return (
    <section className="min-h-screen overflow-hidden py-2 lg:py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-4 items-center">
          {/* Left Column - Heading */}
          <div className="text-left relative pl-8 sm:pl-0">
            {/* SVG Positioned on top-left corner*/}
            <svg
              className="absolute -top-6 -left-2 lg:-top-10 lg:-left-12"
              width="45"
              height="45"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.2834 18.7702C34.4269 18.1209 34.8407 18.5642 39.7179 27.464C44.2956 35.773 44.5093 36.4111 42.9279 36.8953C40.0699 37.8069 39.2089 36.9109 33.937 27.5012C29.6491 19.8163 29.445 19.1447 31.2834 18.7702Z"
                fill="#CC7A00"
              />
              <path
                d="M17.454 39.5806C20.099 37.2736 20.1037 37.3831 29.843 40.8972C37.0309 43.4992 38.6584 44.615 37.4095 45.9519C36.0224 47.3934 35.6701 47.3645 26.3826 44.4129C17.5853 41.6378 15.8241 40.9886 17.454 39.5806Z"
                fill="#CC7A00"
              />
            </svg>

            {/* Heading Text */}
            <h2 className="text-[40px] leading-[45px] sm:text-[40px] sm:leading-[44px] lg:text-[64px] lg:leading-[68px]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontStyle: 'normal',
                  letterSpacing: '0.01em',
                }}
                className="text-[#4D300040]"
              >
                Is this your
              </span>
              <br />
              <span
                style={{
                  fontWeight: 700,
                  fontStyle: 'normal',
                  letterSpacing: '0.01em',
                }}
                className="text-[#4D300040]"
              >
                inner calling?
              </span>
              <br />
              <span
                style={{
                  fontWeight: 700,
                  fontStyle: 'normal',
                  letterSpacing: '-0.02em',
                }}
                className="text-[#4D3000]"
              >
                This space is
              </span>
              <br />
              <span
                style={{
                  fontWeight: 700,
                  fontStyle: 'italic',
                  letterSpacing: '-0.02em',
                }}
                className="text-[#4D3000]"
              >
                for you if
              </span>
              <span
                style={{
                  fontWeight: 700,
                  fontStyle: 'italic',
                  letterSpacing: '-0.02em',
                }}
                className="text-[#4D3000]"
              >
                ...
              </span>
            </h2>
          </div>


          {/* Right Column - Checkpoints */}
          <div className="space-y-4 lg:space-y-4">
            {/* Checkpoint 1 */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 34 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:w-[34px] lg:h-[30px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.0043 1.49686C28.1271 2.77759 27.1972 3.532 24.8814 5.65484C22.8988 7.46191 22.934 7.44436 22.3726 6.8654C21.2147 5.61977 16.9689 4.49692 15.7584 5.14607C15.1794 5.44431 15.2497 6.04082 15.8637 6.04082C17.5303 6.05836 19.0743 6.83031 20.3901 7.9356C21.5655 8.93562 21.5655 8.88297 19.8989 10.5321C18.1093 12.2865 15.5654 15.1813 14.1443 17.0585L13.0565 18.4972L12.1443 17.1463C9.98633 13.9181 7.65299 12.3216 6.21436 13.076C5.68803 13.3567 5.77575 13.5322 7.35472 15.1989C8.74072 16.6551 10.1793 18.7253 11.1969 20.7428C12.0215 22.3746 14.0566 22.3746 15.4426 20.0236C16.4427 18.3217 19.0216 15.0761 21.1444 12.8655L23.0393 10.883L23.4954 11.9006C27.5657 21.0061 17.6356 31.55 9.28459 26.9886C0.758108 22.3219 2.68796 7.35663 11.9865 6.02327C13.811 5.76012 13.846 5.14605 12.039 4.91799C7.37223 4.28639 1.40725 9.81275 0.775655 15.3218C-0.417358 25.8307 9.9513 32.6729 20.0918 28.0939C26.2499 25.3219 29.127 15.3568 25.3199 10.0935C25.0393 9.7076 24.8112 9.33919 24.8112 9.25138C24.8112 8.88298 27.9516 6.07589 31.285 3.51444C35.0394 0.619654 33.0921 -0.60845 30.0043 1.49686Z"
                    fill="#CC7A00"
                  />
                </svg>
              </div>

              <div className="text-[20px] md:text-[22px] leading-[25px] lg:leading-[100%]"
                style={{
                  fontFamily: 'Lato',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '0%',
                  color: '#4D3000',
                }}
              >
                You've succeeded outwardly{' '}
                (career, status, family)
                —{' '}
                <strong style={{ color: '#CC7A00' }}>
                  But feel a quiet emptiness inside.
                </strong>
              </div>

            </div>

            {/* Checkpoint 2 */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 34 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:w-[34px] lg:h-[30px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.0043 1.49686C28.1271 2.77759 27.1972 3.532 24.8814 5.65484C22.8988 7.46191 22.934 7.44436 22.3726 6.8654C21.2147 5.61977 16.9689 4.49692 15.7584 5.14607C15.1794 5.44431 15.2497 6.04082 15.8637 6.04082C17.5303 6.05836 19.0743 6.83031 20.3901 7.9356C21.5655 8.93562 21.5655 8.88297 19.8989 10.5321C18.1093 12.2865 15.5654 15.1813 14.1443 17.0585L13.0565 18.4972L12.1443 17.1463C9.98633 13.9181 7.65299 12.3216 6.21436 13.076C5.68803 13.3567 5.77575 13.5322 7.35472 15.1989C8.74072 16.6551 10.1793 18.7253 11.1969 20.7428C12.0215 22.3746 14.0566 22.3746 15.4426 20.0236C16.4427 18.3217 19.0216 15.0761 21.1444 12.8655L23.0393 10.883L23.4954 11.9006C27.5657 21.0061 17.6356 31.55 9.28459 26.9886C0.758108 22.3219 2.68796 7.35663 11.9865 6.02327C13.811 5.76012 13.846 5.14605 12.039 4.91799C7.37223 4.28639 1.40725 9.81275 0.775655 15.3218C-0.417358 25.8307 9.9513 32.6729 20.0918 28.0939C26.2499 25.3219 29.127 15.3568 25.3199 10.0935C25.0393 9.7076 24.8112 9.33919 24.8112 9.25138C24.8112 8.88298 27.9516 6.07589 31.285 3.51444C35.0394 0.619654 33.0921 -0.60845 30.0043 1.49686Z"
                    fill="#CC7A00"
                  />
                </svg>
              </div>
              <div className="text-[20px] md:text-[22px] leading-[25px] lg:leading-[100%]"
                style={{
                  fontFamily: 'Lato',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '0%',
                  color: '#4D3000',
                }}
              >
                You sense there's more purpose beyond early mornings & evening commutes.
              </div>
            </div>

            {/* Checkpoint 3 */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 34 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:w-[34px] lg:h-[30px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.0043 1.49686C28.1271 2.77759 27.1972 3.532 24.8814 5.65484C22.8988 7.46191 22.934 7.44436 22.3726 6.8654C21.2147 5.61977 16.9689 4.49692 15.7584 5.14607C15.1794 5.44431 15.2497 6.04082 15.8637 6.04082C17.5303 6.05836 19.0743 6.83031 20.3901 7.9356C21.5655 8.93562 21.5655 8.88297 19.8989 10.5321C18.1093 12.2865 15.5654 15.1813 14.1443 17.0585L13.0565 18.4972L12.1443 17.1463C9.98633 13.9181 7.65299 12.3216 6.21436 13.076C5.68803 13.3567 5.77575 13.5322 7.35472 15.1989C8.74072 16.6551 10.1793 18.7253 11.1969 20.7428C12.0215 22.3746 14.0566 22.3746 15.4426 20.0236C16.4427 18.3217 19.0216 15.0761 21.1444 12.8655L23.0393 10.883L23.4954 11.9006C27.5657 21.0061 17.6356 31.55 9.28459 26.9886C0.758108 22.3219 2.68796 7.35663 11.9865 6.02327C13.811 5.76012 13.846 5.14605 12.039 4.91799C7.37223 4.28639 1.40725 9.81275 0.775655 15.3218C-0.417358 25.8307 9.9513 32.6729 20.0918 28.0939C26.2499 25.3219 29.127 15.3568 25.3199 10.0935C25.0393 9.7076 24.8112 9.33919 24.8112 9.25138C24.8112 8.88298 27.9516 6.07589 31.285 3.51444C35.0394 0.619654 33.0921 -0.60845 30.0043 1.49686Z"
                    fill="#CC7A00"
                  />
                </svg>
              </div>
              <div className="text-[20px] md:text-[22px] leading-[25px] lg:leading-[100%]"
                style={{
                  fontFamily: 'Lato',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '0%',
                  color: '#4D3000',
                }}
              >
                You've <strong style={{ color: '#CC7A00' }}>Lost touch</strong> with{' '}
                <strong style={{ color: '#CC7A00' }}>what genuinely inspires your heart.</strong>
              </div>
            </div>

            {/* Checkpoint 4 */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 34 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:w-[34px] lg:h-[30px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.0043 1.49686C28.1271 2.77759 27.1972 3.532 24.8814 5.65484C22.8988 7.46191 22.934 7.44436 22.3726 6.8654C21.2147 5.61977 16.9689 4.49692 15.7584 5.14607C15.1794 5.44431 15.2497 6.04082 15.8637 6.04082C17.5303 6.05836 19.0743 6.83031 20.3901 7.9356C21.5655 8.93562 21.5655 8.88297 19.8989 10.5321C18.1093 12.2865 15.5654 15.1813 14.1443 17.0585L13.0565 18.4972L12.1443 17.1463C9.98633 13.9181 7.65299 12.3216 6.21436 13.076C5.68803 13.3567 5.77575 13.5322 7.35472 15.1989C8.74072 16.6551 10.1793 18.7253 11.1969 20.7428C12.0215 22.3746 14.0566 22.3746 15.4426 20.0236C16.4427 18.3217 19.0216 15.0761 21.1444 12.8655L23.0393 10.883L23.4954 11.9006C27.5657 21.0061 17.6356 31.55 9.28459 26.9886C0.758108 22.3219 2.68796 7.35663 11.9865 6.02327C13.811 5.76012 13.846 5.14605 12.039 4.91799C7.37223 4.28639 1.40725 9.81275 0.775655 15.3218C-0.417358 25.8307 9.9513 32.6729 20.0918 28.0939C26.2499 25.3219 29.127 15.3568 25.3199 10.0935C25.0393 9.7076 24.8112 9.33919 24.8112 9.25138C24.8112 8.88298 27.9516 6.07589 31.285 3.51444C35.0394 0.619654 33.0921 -0.60845 30.0043 1.49686Z"
                    fill="#CC7A00"
                  />
                </svg>
              </div>
              <div className="text-[20px] md:text-[22px] leading-[25px] lg:leading-[100%]"
                style={{
                  fontFamily: 'Lato',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '0%',
                  color: '#4D3000',
                }}
              >
                You want <strong style={{ color: '#CC7A00' }}>Clarity, Stillness,</strong> &{' '}
                <strong style={{ color: '#CC7A00' }}>Depth</strong> — Not quick fixes/quick wins.
              </div>
            </div>

            {/* Checkpoint 5 */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 34 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:w-[34px] lg:h-[30px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.0043 1.49686C28.1271 2.77759 27.1972 3.532 24.8814 5.65484C22.8988 7.46191 22.934 7.44436 22.3726 6.8654C21.2147 5.61977 16.9689 4.49692 15.7584 5.14607C15.1794 5.44431 15.2497 6.04082 15.8637 6.04082C17.5303 6.05836 19.0743 6.83031 20.3901 7.9356C21.5655 8.93562 21.5655 8.88297 19.8989 10.5321C18.1093 12.2865 15.5654 15.1813 14.1443 17.0585L13.0565 18.4972L12.1443 17.1463C9.98633 13.9181 7.65299 12.3216 6.21436 13.076C5.68803 13.3567 5.77575 13.5322 7.35472 15.1989C8.74072 16.6551 10.1793 18.7253 11.1969 20.7428C12.0215 22.3746 14.0566 22.3746 15.4426 20.0236C16.4427 18.3217 19.0216 15.0761 21.1444 12.8655L23.0393 10.883L23.4954 11.9006C27.5657 21.0061 17.6356 31.55 9.28459 26.9886C0.758108 22.3219 2.68796 7.35663 11.9865 6.02327C13.811 5.76012 13.846 5.14605 12.039 4.91799C7.37223 4.28639 1.40725 9.81275 0.775655 15.3218C-0.417358 25.8307 9.9513 32.6729 20.0918 28.0939C26.2499 25.3219 29.127 15.3568 25.3199 10.0935C25.0393 9.7076 24.8112 9.33919 24.8112 9.25138C24.8112 8.88298 27.9516 6.07589 31.285 3.51444C35.0394 0.619654 33.0921 -0.60845 30.0043 1.49686Z"
                    fill="#CC7A00"
                  />
                </svg>
              </div>
              <div className="text-[20px] md:text-[22px] leading-[25px] lg:leading-[100%]"
                style={{
                  fontFamily: 'Lato',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '0%',
                  color: '#4D3000',
                }}
              >
                You're <strong className="text-[#CC7A00]">Ready for reflection,</strong> even if it means sitting in discomfort.
              </div>
            </div>
          </div>
        </div>

        <div className="flex sm:justify-start mt-6 lg:mt-4 ml-74">
          <svg
            width="60"
            height="52"
            viewBox="0 0 87 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#4D3000] rotate-90 sm:rotate-0 lg:w-[87px] lg:h-[74px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40.5721 62.9505C38.5092 61.2041 43.1153 59.8961 49.155 60.5109L52.2754 60.835C44.5749 54.1105 37.2501 47.9442 33.7062 38.3279C32.7687 35.7899 32.4243 35.2426 31.2434 34.443C23.1455 28.9749 16.1044 15.7964 15.8498 5.70485C15.7443 1.98841 16.4724 0.595822 18.4156 0.728899C20.4968 0.873855 20.7789 1.29245 21.3167 5.30067C22.5558 14.8025 28.5074 28.4633 31.905 29.6332C31.9686 29.6551 31.9969 29.0572 32.0055 28.31C31.9366 17.7823 43.2838 14.3293 51.5215 22.3823C58.5297 29.2613 51.28 40.4132 41.1443 38.3881C36.7231 37.5088 44.5207 48.6969 54.1266 57.0064C56.2623 58.8494 58.1466 60.3914 58.3055 60.4461C58.4959 60.5117 57.596 58.3798 56.2981 55.7535C52.3339 47.5644 51.7973 44.3785 54.2656 44.1208C56.3932 43.9245 58.0954 45.5824 59.3713 49.2015C61.7271 55.872 64.4232 60.7306 68.5188 65.8565C73.3895 71.9282 67.692 71.1453 64.5964 68.6861C60.2062 65.1379 49.0496 62.261 44.5498 63.5698C43.3125 63.9655 41.3926 63.6618 40.5721 62.9505ZM43.3263 35.3521C49.4126 33.7677 49.9186 24.9744 44.0945 21.3614C40.4333 19.1003 36.9353 26.5775 38.3617 33.6786C38.6936 35.2933 40.7894 36.0149 43.3263 35.3521Z"
              fill="#4D3000"
              style={{
                fill: "color(display-p3 0.4000 0.2510 0.0000)",
                fillOpacity: 1
              }}
            />
          </svg>
        </div>


        {/* Quote Section */}
        <div className="text-center mt-8 lg:mt-16 mb-8 lg:mb-12">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto relative">
            {/* Top Left Quote */}
            <div className="absolute left-8 sm:left-16 lg:left-38 -top-2 lg:-top-4">
              <svg
                width="18"
                height="12"
                viewBox="0 0 25 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-[25px] lg:h-[17px]"
              >
                <path d="M18.9183 10.0746L19.6092 10.0585C27.1779 9.92994 24.655 -1.19023 16.5561 1.7505C10.5782 3.91989 11.687 13.8991 18.0826 15.5382C20.9109 16.2613 24.0605 15.7471 21.7143 14.9436C19.7057 14.2687 18.0826 12.3243 18.1951 10.7334C18.2273 10.3799 18.5326 10.0746 18.9183 10.0746Z" fill="#4D3000" fillOpacity="0.25" />
                <path d="M4.14977 1.34928C-3.12967 4.14538 -0.172912 16.3583 7.91 16.8886C10.0151 17.0332 10.5615 16.535 8.97059 15.9405C7.42793 15.362 5.48353 12.6301 5.27463 10.7821C5.22642 10.4125 5.51564 10.1072 5.88523 10.1072C8.0064 10.1072 8.89025 10.1073 10.1276 8.40388C13.1647 4.19365 9.13129 -0.562999 4.14977 1.34928Z" fill="#4D3000" fillOpacity="0.25" />
              </svg>
            </div>

            {/* Top Right Quote */}
            <div className="absolute right-8 sm:right-16 lg:right-38 -top-2 lg:-top-4">
              <svg
                width="18"
                height="12"
                viewBox="0 0 25 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-[25px] lg:h-[17px]"
              >
                <path d="M5.22237 7.75306L4.53138 7.76914C-3.03731 7.8977 -0.514413 19.0179 7.58457 16.0771C13.5624 13.9077 12.4536 3.92855 6.05798 2.28945C3.22976 1.56632 0.0801582 2.08055 2.42629 2.88403C4.43497 3.55895 6.05798 5.5033 5.94549 7.09419C5.91335 7.44772 5.60804 7.75306 5.22237 7.75306Z" fill="#4D3000" fillOpacity="0.25" />
                <path d="M19.9909 16.4784C27.2703 13.6823 24.3135 1.46936 16.2306 0.939062C14.1255 0.794437 13.5792 1.29259 15.17 1.88717C16.7127 2.46567 18.6571 5.1975 18.866 7.0455C18.9142 7.4151 18.625 7.72045 18.2554 7.72045C16.1342 7.72045 15.2504 7.72039 14.013 9.42376C10.9759 13.634 15.0093 18.3906 19.9909 16.4784Z" fill="#4D3000" fillOpacity="0.25" />
              </svg>
            </div>

            {/* Quote Text */}
            <p
              className="text-[#4D3000] italic font-light px-4 text-xl lg:text-[28px] leading-6 sm:leading-7 lg:leading-8"
              style={{
                fontFamily: "'La Belle Aurore', cursive",
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '0%',
                maxWidth: '48rem',
              }}
            >
              If any of this resonates, you're <br /> already on the path.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a href="https://calendly.com/clayboykin" target="_blank" rel="noopener noreferrer">
            <button
              className="text-[#CC7A00] text-sm sm:text-base lg:text-lg font-medium cursor-pointer rounded-lg transition-all duration-300 transform w-full max-w-sm lg:max-w-none mx-auto"
              style={{
                width: "100%",
                maxWidth: "353px",
                height: "56px",
                paddingTop: "16px",
                paddingRight: "24px",
                paddingBottom: "16px",
                paddingLeft: "24px",
                background: "#CC7A001F",
                borderRadius: "8px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#CC7A0052",
                boxShadow: "0px 8px 24px 0px #995C001A",
                opacity: 1,
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Book Your Complimentary Session
            </button>
          </a>
          <p
            className="mt-2 text-center text-sm sm:text-base"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0%",
              color: "#4D300080",
            }}
          >
            Feeling unsure? Book anyway!
          </p>

        </div>
      </div>


    </section>
  );
};

export default InnerCallingSection;