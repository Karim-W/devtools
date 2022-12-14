//
//  ContentView.swift
//  DevTools
//
//  Created by Karim Hassan on 14/12/2022.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        WebView(data: WebViewData(url: URL(string: "https://devtools.karim-w.com")!)).frame(minWidth: 900,minHeight: 750)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
