import React, { Children } from "react";
import Image from "next/image";
const AnimationButton = ({text,img,children}) => {
  return (
    <div>
      <div class="active flex items-center justify-center gap-4">
        <div class="rotate">
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rotate1">
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rotate2">
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rotate">
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rotate1">
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rotate2">
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rotate">
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rotate1">
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rotate2">
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="angle">
            <div class="size">
              <div class="position">
                <div class="pulse">
                  <div class="particle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Image width={30} src={img}/> */}
        <h3>{text}</h3>
        {children}
      </div>
    </div>
  );
};

export default AnimationButton;
