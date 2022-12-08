odoo.define('viettelpost_connector.handle_button', function (require) {
    "use strict";
    var ListController = require('web.ListController');

    ListController.include({
        renderButtons: function ($node) {
            this._super.apply(this, arguments);
            if (!this.noLeaf && this.hasButtons) {
                this.$buttons.on('click', '.o_button_sync_province', this._onClickSyncProvince.bind(this));
                this.$buttons.on('click', '.o_button_sync_district', this._onClickSyncDistrict.bind(this));
                this.$buttons.on('click', '.o_button_sync_ward', this._onClickSyncWard.bind(this));
                this.$buttons.on('click', '.o_button_sync_office', this._onClickSyncOffice.bind(this));
                this.$buttons.on('click', '.o_button_sync_service', this._onClickSyncService.bind(this));
                this.$buttons.on('click', '.o_button_sync_extend_service', this._onClickSyncExtendService.bind(this));
                this.$buttons.on('click', '.o_button_sync_store', this._onClickSyncStore.bind(this));
                this.$buttons.on('click', '.o_button_create_store', this._onClickCreateStore.bind(this));
            }
        },
        _onClickSyncProvince: function (e) {
            var self = this;
            return this._rpc({
                model: 'vtp.country.province',
                method: 'sync_province'
            }).then(function(result) {
                self.do_action(result);
            }).then(function(result) {
                self.reload();
            });
        },
        _onClickSyncDistrict: function (e) {
            var self = this;
            return this._rpc({
                model: 'vtp.country.district',
                method: 'sync_district'
            }).then(function(result) {
                self.do_action(result);
            }).then(function(result) {
                self.reload();
            });
        },
        _onClickSyncWard: function (e) {
            var self = this;
            return this._rpc({
                model: 'vtp.country.ward',
                method: 'sync_ward'
            }).then(function(result) {
                self.do_action(result);
            }).then(function(result) {
                self.reload();
            });
        },
        _onClickSyncService: function (e) {
            var self = this;
            return this._rpc({
                model: 'viettelpost.service',
                method: 'sync_service'
            }).then(function(result) {
                self.do_action(result);
            }).then(function(result) {
                self.reload();
            });
        },
        _onClickSyncOffice: function (e) {
            var self = this;
            return this._rpc({
                model: 'viettelpost.office',
                method: 'sync_office'
            }).then(function(result) {
                self.do_action(result);
            }).then(function(result) {
                self.reload();
            });
        },
        _onClickSyncStore: function (e) {
            var self = this;
            return this._rpc({
                model: 'viettelpost.store',
                method: 'sync_store'
            }).then(function(result) {
                self.do_action(result);
            }).then(function(result) {
                self.reload();
            });
        },
        _onClickCreateStore: function (e) {
            var self = this;
            return this._rpc({
                model: 'create.store.wizard',
                method: 'create_store'
            }).then(function(result) {
                self.do_action(result);
            });
        },
        _onClickSyncExtendService: function (e) {
            var self = this;
            return this._rpc({
                model: 'viettelpost.service',
                method: 'sync_extend_services'
            }).then(function(result) {
                self.do_action(result);
            }).then(function(result) {
                self.reload();
            });
        }
    });
});