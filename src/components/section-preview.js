export default () => {
  return (
    <section className="section is-preview" id="preview">
      <div className="inner is-space">
        <h3 className="heading is-second is-montserrat">Preview</h3>

        <div className="group is-white-card">
          <h1>h1見出し</h1>
          <h2>h2見出し</h2>
          <h3>h3見出し</h3>
          <h4>h4見出し</h4>
          <h5>h5見出し</h5>
          <h6>h6見出し</h6>
        </div>

        <div className="group is-white-card">
          <a href="#">リンク</a>｜<b>ストロング</b>｜<small>スモール</small>
        </div>

        <div className="group is-white-card">
          <ol>
            <li>リスト</li>
            <li>リスト</li>
          </ol>
          <ul>
            <li>リスト</li>
            <li>リスト</li>
          </ul>
        </div>

        <div className="group is-white-card">
          <p>
            <dfn>dfnは定義</dfn>
          </p>
          <p>
            <span>abbrは略語と頭字語。</span>
            <abbr title="Hypertext Markup Language">HTML</abbr>
            <span>という使い方。</span>
          </p>
          <p>
            <span>markは</span>
            <mark>ハイライト</mark>
            <span>するときに使用。</span>
          </p>
          <p>
            <span>subは下付き文字。</span>
            <span>H</span>
            <sub>2</sub>
            <span>など。</span>
          </p>
          <p>
            <span>supは上付き文字。</span>
            <span>A</span>
            <sup>2</sup>
            <span>など。</span>
          </p>
        </div>

        <div className="group is-white-card">
          <pre>
            <code>pre, code</code>
          </pre>
        </div>

        <div className="group is-white-card">
          <form>
            <fieldset>
              <legend>TEXT</legend>
              <input type="text" placeholder="Text" />
              <input type="text" placeholder="Disabled" disabled />
              <input type="text" defaultValue="Readonly" readOnly />
            </fieldset>
            <fieldset>
              <legend>SEARCH</legend>
              <input type="search" placeholder="Search" />
              <input type="search" placeholder="Search" disabled />
            </fieldset>
            <fieldset>
              <legend>URL</legend>
              <input type="url" placeholder="example.com" />
              <input type="url" placeholder="example.com" disabled />
            </fieldset>
            <fieldset>
              <legend>E-MAIL</legend>
              <input type="email" placeholder="example@gmail.com" />
              <input type="email" placeholder="example@gmail.com" disabled />
            </fieldset>
            <fieldset>
              <legend>TEL</legend>
              <input
                type="tel"
                size="14"
                maxLength="12"
                placeholder="000-000-0000"
              />
              <input
                type="tel"
                size="14"
                maxLength="12"
                placeholder="000-000-0000"
                disabled
              />
            </fieldset>
            <fieldset>
              <legend>PASSWORD</legend>
              <input type="password" />
              <input type="password" disabled />
            </fieldset>
            <fieldset>
              <legend>DATETIME LOCAL</legend>
              <input type="datetime-local" defaultValue="2017-02-02T00:00:00" />
              <input
                type="datetime-local"
                defaultValue="2017-02-02T00:00:00"
                disabled
              />
            </fieldset>
            <fieldset>
              <legend>DATE</legend>
              <input type="date" defaultValue="2017-02-02" />
              <input type="date" defaultValue="2017-02-02" disabled />
            </fieldset>
            <fieldset>
              <legend>MONTH</legend>
              <input type="month" defaultValue="2017-02" />
              <input type="month" defaultValue="2017-02" disabled />
            </fieldset>
            <fieldset>
              <legend>TIME</legend>
              <input type="time" defaultValue="00:00:00" />
              <input type="time" defaultValue="00:00:00" disabled />
            </fieldset>
            <fieldset>
              <legend>NUMBER</legend>
              <input type="number" step="10" />
              <input type="number" step="10" disabled />
            </fieldset>
            <fieldset>
              <legend>FILE</legend>
              <input type="file" />
              <input type="file" disabled />
            </fieldset>
            <fieldset>
              <legend>COLOR</legend>
              <input type="color" defaultValue="#1cb4c7" />
              <input type="color" defaultValue="#1cb4c7" disabled />
            </fieldset>
            <fieldset>
              <legend>RANGE</legend>
              <input type="range" />
              <input type="range" disabled />
            </fieldset>
            <fieldset>
              <legend>TEXTAREA</legend>
              <textarea></textarea>
              <textarea disabled></textarea>
            </fieldset>
            <fieldset>
              <legend>RADIO</legend>
              <label>
                <input type="radio" name="radio-default-1" defaultChecked />
                <span>むすびー</span>
              </label>
              <label>
                <input type="radio" name="radio-default-1" />
                <span>むすびい</span>
              </label>
              <label>
                <input type="radio" name="radio-default-1" disabled />
                <span>むすび</span>
              </label>
            </fieldset>
            <fieldset>
              <legend>CHECKBOX</legend>
              <label>
                <input
                  type="checkbox"
                  name="checkbox-default-1"
                  defaultChecked
                />
                <span>HTML</span>
              </label>
              <label>
                <input type="checkbox" name="checkbox-default-1" />
                <span>CSS</span>
              </label>
              <label>
                <input type="checkbox" name="checkbox-default-1" disabled />
                <span>JS</span>
              </label>
            </fieldset>
            <fieldset>
              <legend>SELECT</legend>
              <select>
                <option>Select A</option>
                <option>Select B</option>
                <option>Select C</option>
                <option>Select D</option>
                <option>Select E</option>
              </select>
              <select disabled>
                <option>Select A</option>
                <option>Select B</option>
                <option>Select C</option>
                <option>Select D</option>
                <option>Select E</option>
              </select>
            </fieldset>
            <fieldset>
              <legend>SELECT MULTIPLE</legend>
              <select multiple>
                <option>Select A</option>
                <option>Select B</option>
                <option>Select C</option>
                <option>Select D</option>
                <option>Select E</option>
              </select>
              <select multiple disabled>
                <option>Select A</option>
                <option>Select B</option>
                <option>Select C</option>
                <option>Select D</option>
                <option>Select E</option>
              </select>
            </fieldset>
            <p>
              <input type="button" defaultValue="インプットボタン" />
              <input type="button" defaultValue="インプットボタン" disabled />
            </p>
            <p>
              <input type="reset" />
              <input type="reset" disabled />
            </p>
            <p>
              <input type="submit" />
              <input type="submit" disabled />
            </p>
          </form>
        </div>

        <div className="group is-white-card">
          <progress></progress>
        </div>

        <div className="group is-white-card">
          <details>
            <summary>サマリー</summary>
            <p>詳細の文章</p>
          </details>
        </div>

        <div className="group is-white-card">
          <table>
            <thead>
              <tr>
                <th>th</th>
                <th>th</th>
                <th>th</th>
                <th>th</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>td</td>
                <td>td</td>
                <td>td</td>
                <td>td</td>
              </tr>
              <tr>
                <td>td</td>
                <td>td</td>
                <td>td</td>
                <td>td</td>
              </tr>
              <tr>
                <td>td</td>
                <td>td</td>
                <td>td</td>
                <td>td</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>th</th>
                <th>th</th>
                <th>th</th>
                <th>th</th>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="group is-white-card">
          <p>text hr text</p>
          <hr />
          <p>text hr text</p>
        </div>

        <div className="group is-white-card">
          <address>address address address address address</address>
        </div>
      </div>
    </section>
  )
}
